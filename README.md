# Go2JS

Compile Go to JS in the browser (using [GopherJS](https://github.com/gopherjs/gopherjs))

Based on [GopherJS Playground](https://github.com/gopherjs/gopherjs.github.io)

The motive for this project was to enable client-side compiling of Golang to JavaScript to run in the browser for [LocalPen](https://github.com/hatemhosny/localpen).

## Usage

```html
<!-- <script src="https://cdn.jsdelivr.net/npm/go2js/build/index.js"></script> -->
<script src="index.js"></script>
<script>
  const code = `
package main
import "syscall/js"
func main() {fmt.Println("Hello, from Go")
js.Global().Call("alert", "Hello, JavaScript")
println("Hello, JS console")}
`;
  window.go2js
    .format(code)
    .then((formatted) => {
      console.log(formatted);
      // return window.go2js.compile(formatted,
      // 'https://cdn.jsdelivr.net/npm/go2js/build');
      return window.go2js.compile(formatted);
    })
    .then(eval)
    .catch(console.warn);
</script>
```

Run `npm start` to start a server (http://127.0.0.1:8080) and watch for changes.

## Contribution

Please do!

Feedback, ideas and pull requests are highly appreciated.

## License

[BSD 2-Clause "Simplified" License](LICENSE) same as GopherJS lisence

## Support the author

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N036P4Y)
