package main

import (
	"go/format"
	"github.com/gopherjs/gopherjs/js"
)

func main() {
	js.Global.Set("go2jsFormat", fmt)
}

func fmt(code string) (string, string) {
  out, err := format.Source([]byte(code))
  if err != nil {
    return "", err.Error()
  }
  return string(out), ""
}
