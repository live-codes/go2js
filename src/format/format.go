package main

import (
	"github.com/gopherjs/gopherjs.github.io/playground/internal/imports"
	"github.com/gopherjs/gopherjs/js"
)

func main() {
	js.Global.Set("go2jsFormat", format)
}

func format(code string) (string, string) {
  out, err := imports.Process("prog.go", []byte(code), nil)
  if err != nil {
    return "", err.Error()
  }
  return string(out), ""
}
