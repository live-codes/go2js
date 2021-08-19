GOOS=linux gopherjs build src/go2js.go --output src/go2js.js --minify
esbuild src/index.ts --outfile=build/index.js --format=iife --global-name=go2js --bundle --minify --sourcemap
esbuild src/index.ts --outfile=build/index.esm.js --format=esm --bundle --minify --sourcemap
cp src/go2js.js build/go2js.js
cp src/go2js.js.map build/go2js.js.map
cp src/index.html build/index.html
