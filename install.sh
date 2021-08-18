export GO111MODULE=off
export GOPHERJS_GOROOT="$(go env GOROOT)"

go get -u github.com/gopherjs/gopherjs
go get -u github.com/gopherjs/gopherjs.github.io
go get -u github.com/neelance/go-angularjs
go get -u honnef.co/go/js/dom
go get -u honnef.co/go/js/xhr
