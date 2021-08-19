GOOS=linux gopherjs build src/compile/compile.go --output src/compile/go2js-compile.js --minify
GOOS=linux gopherjs build src/format/format.go --output src/format/go2js-format.js --minify
GOOS=linux gopherjs build src/format/format-no-imports.go --output src/format/go2js-format-no-imports.js --minify
esbuild src/index.ts --outfile=build/index.js --format=iife --global-name=go2js --bundle --minify --sourcemap
esbuild src/index.ts --outfile=build/index.esm.js --format=esm --bundle --minify --sourcemap
cp src/compile/go2js-compile.js build/go2js-compile.js
cp src/compile/go2js-compile.js.map build/go2js-compile.js.map
cp src/format/go2js-format.js build/go2js-format.js
cp src/format/go2js-format.js.map build/go2js-format.js.map
cp src/format/go2js-format-no-imports.js build/go2js-format-no-imports.js
cp src/format/go2js-format-no-imports.js.map build/go2js-format-no-imports.js.map
cp src/index.html build/index.html
