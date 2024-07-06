# Update

## Update Go version

download windows-amd64.msi file from https://go.dev/dl/

install

add this to .bashrc (in C:\Users\hatem)

```bash
export GOROOT='/c/Program Files/Go'
export GOPATH=/d/DevWork/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

```bash
bash

# go version

# which go

# rm -rf /usr/bin/go

# curl -O https://dl.google.com/go/go1.19.13.linux-amd64.tar.gz

# tar -xvf go1.19.13.linux-amd64.tar.gz

# mv go /usr/local

# export GOROOT=/usr/local/go
# export GOPATH=$HOME/go
# export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

# go version
```

## Update Gopherjs

```bash
GO111MODULE=off go get -v github.com/gopherjs/gopherjs
export GOPHERJS_GOROOT="$(go env GOROOT)"
npm run build
```

update Go version in `src/compile/compile.go`
pull changes in pkg (from playground submodule)
