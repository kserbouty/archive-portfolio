# Portfolio (archive)

Responsive layout with CSS and media queries.

---

## Requirements

- Node.js 12+

## Installation

Clone the repository

```bash
git clone https://github.com/kserbouty/archive-portfolio.git
```

Switch to the repository folder

```bash
cd archive-portfolio
```

The index.html is available in the public directory.

## Docker

To install with Docker, run following commands:

```bash
git clone https://github.com/kserbouty/archive-portfolio.git
cd archive-portfolio
docker compose up -d --build
```

The interface can be accessed at <http://localhost:8000>.

---

## Gulp

Install all the dependencies using npm

```bash
npm install
```

Install [gulp-cli](https://www.npmjs.com/package/gulp-cli) globally

```bash
npm install --global gulp-cli
```

Optimize resources when modified

```bash
gulp
```
Uninstall [gulp-cli](https://www.npmjs.com/package/gulp-cli) globally

```bash
npm uninstall --global gulp-cli
```

---

## Dependencies

- [gulp](https://www.npmjs.com/package/gulp) - Manage plugins for [gulp.js](https://gulpjs.com/)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - Minify CSS
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) - Concatenate files
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - Minify PNG, JPEG, GIF and SVG images
- [gulp-terser](https://www.npmjs.com/package/gulp-terser) - Minify JavaScript

## Folders

- `public` - Contains the index.html with optimized resources
- `resources` - Contains scripts used for development

---

## License

[MIT License](./LICENSE.md)
