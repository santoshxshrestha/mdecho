
# mdecho

A sleek, fast, and minimal web-based **Markdown editor** with **live preview** and built-in **Vim keybindings**. Powered entirely by WebAssembly (WASM)—no server required!

![Dark Mode](../static/images/mdecho_dark.png)
![Light Mode](../static/images/mdecho_light.png)

---

## Features

- Live preview of Markdown content
- Side-by-side editor and preview layout
- Real-time synchronization between editor and preview
- Clean and minimal interface
- Built-in **Vim motions** via CodeMirror for power users
- Runs fully client-side in your browser (WASM)

## Usage

Visit the live application at [mdecho](santoshxshrestha.github.io/mdecho/)!

Or host it yourself—just serve the static files in this repo!

## Local Development

```bash
git clone https://github.com/santoshxshrestha/mdecho.git
cd mdecho
```

To build the WASM package:

```bash
wasm-pack build --target web
```

Then serve the static files (for example, using Python):

```bash
python3 -m http.server
```

Open your browser and navigate to `http://localhost:8000`

## Build

To build the WASM package for release:

```bash
wasm-pack build --release --target web
```

## Contributing

This is learning by doing project for WebAssembly (WASM) using Rust.
so this might not be the most optimized or best way to implement this.

## License

MIT
