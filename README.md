# Fortune Teller 🔮

A tiny, playful web app that serves short fortunes: some mystical, some silly. Inspired by real-life fortune cookies, this project was built to practice DOM manipulation, event handling and a few interactive UI effects displayed with JavaScript.

Built with **plain HTML, CSS and JavaScript**, no frameworks or build tools required.

## Demo
Try it live: [https://petratype.github.io/fortune-teller](https://petratype.github.io/fortune-teller)

## Features
- **Multilanguage support:** English, Spanish, Norwegian, Portuguese, German, and French.
- **Typing animation:** Each fortune appears letter by letter for a magical reveal effect.
- **Persistent language preference:** Remembers your last selected language using `localStorage`.
- **Dynamic translation:** Switch languages while keeping the currently displayed fortune translated instantly. So you don't loose your fortune while you change the language. 
- **Fun and varied fortunes:** 31 fortunes per language, ranging from mystical to humorous.
- **Responsive, fixed UI elements:** Language switcher buttons in the top-right, footer fixed at the bottom with a subtle link to my portfolio.
- **Single-file frontend:** `index.html`, `style.css`, `script.js` for easy deployment and understanding.
- **Accessible and lightweight:** Minimal dependencies and fast loading times.

## How to run locally
Simply open `index.html` in your browser or visit the live GitHub Pages demo:  
[https://petratype.github.io/fortune-teller](https://petratype.github.io/fortune-teller)

## Technical Notes
- Uses **JavaScript** `setInterval` for typing animation.
- Language detection based on browser locale with fallback to English.
- Language switching and button label updates handled via `dataset` attributes.
- All fortunes stored in a structured object for easy extension or modification.
- Designed with **modular and readable code** to encourage learning and future enhancements.

