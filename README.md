# Portfolio (Prototype)

## Features

- Multilingual website (english and french supported).
- Responsive design with media queries.
- Minify resources with Gulp.

## Installation

### Requirements

- Node >=16 with npm
- Docker (optional)

### Dockerfile

Build the image

```bash
docker build -t archive/portfolio .
```

Run your container on <http://localhost:3000/>

```bash
docker run -d -p 3000:80/tcp archive/portfolio
```

## Configuration

Install dependencies

```bash
npm install
```

Install the gulp command line utility

```bash
npm install --global gulp-cli
```

Run gulpfile.js to minify resources if needed

```bash
gulp
```

## Authors

Karim Serbouty

## License

[MIT License](./LICENSE.md)
