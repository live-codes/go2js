package main

import (
	"bytes"
	"go/ast"
	"go/parser"
	"go/scanner"
	"go/token"
	"go/types"

	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"
)


func main() {

	var output string
	packages := make(map[string]*compiler.Archive)
	var pkgsToLoad map[string]struct{}
	importContext := &compiler.ImportContext{
		Packages: make(map[string]*types.Package),
		Import: func(path string) (*compiler.Archive, error) {
			if pkg, found := packages[path]; found {
				return pkg, nil
			}
			pkgsToLoad[path] = struct{}{}
			return &compiler.Archive{}, nil
		},
	}
	fileSet := token.NewFileSet()
	pkgsReceived := 0

	var compile func(string, string, func(...interface{}) *js.Object)
	compile = func(code string, baseUrl string, callback func(...interface{}) *js.Object) {
		output = ""
		pkgsToLoad = make(map[string]struct{})

		file, err := parser.ParseFile(fileSet, "prog.go", []byte(code), parser.ParseComments)
		if err != nil {
			if list, ok := err.(scanner.ErrorList); ok {
				for _, entry := range list {
					output += entry.Error() + "\n"
				}
				callback(output, nil)
				return
			}
			callback("syntax error", nil)
			return
		}

		mainPkg, err := compiler.Compile("main", []*ast.File{file}, fileSet, importContext, false)
		packages["main"] = mainPkg
		if err != nil && len(pkgsToLoad) == 0 {
			if list, ok := err.(compiler.ErrorList); ok {
				var output string
				for _, entry := range list {
					output += entry.Error() + "\n"
				}
				callback(output, nil)
				return
			}
			callback("compile error", nil)
			return
		}

		var allPkgs []*compiler.Archive
		if len(pkgsToLoad) == 0 {
			allPkgs, _ = compiler.ImportDependencies(mainPkg, importContext.Import)
		}
		if len(pkgsToLoad) != 0 {
			pkgsReceived = 0
			for path := range pkgsToLoad {
				req := xhr.NewRequest("GET", baseUrl + "/pkg/" + path + ".a.js")
				req.ResponseType = xhr.ArrayBuffer
				go func(path string) {
					err := req.Send(nil)
					if err != nil || req.Status != 200 {
						callback(`failed to load package "` + path + `"`, nil)
						return
					}

					data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
					packages[path], err = compiler.ReadArchive(path+".a", bytes.NewReader(data))
					if err != nil {
						callback(err.Error(), nil)
						return
					}
          if err := packages[path].RegisterTypes(importContext.Packages); err != nil {
						callback(err.Error(), nil)
            return
          }

					pkgsReceived++
					if pkgsReceived == len(pkgsToLoad) {
						compile(code, baseUrl, callback)
						return
					}
					return
				}(path)
			}
			return
		}

		jsCode := bytes.NewBuffer(nil)
		jsCode.WriteString("try{\n")
		compiler.WriteProgramCode(allPkgs, &compiler.SourceMapFilter{Writer: jsCode}, "1.19.13")
		jsCode.WriteString("} catch (err) {\nconsole.error(err.message);\n}\n")
		js.Global.Set("$checkForDeadlock", true)
		callback(nil, jsCode.String())
	}
	js.Global.Set("go2jsCompile", compile)
}
