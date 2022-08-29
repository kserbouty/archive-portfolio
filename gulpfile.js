import gulp from 'gulp';
import clean_css from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';

const { src, dest, series } = gulp;

function concatCSS() {
    return src([
        'resources/styles/base.css',
        'resources/styles/content.css',
        'resources/styles/icon.css',
        'resources/styles/media.css',
        'resources/styles/nav.css'
    ]).pipe(concat('all.css'))
        .pipe(dest('resources/styles'));
}

function cssMinifier() {
    return src('resources/styles/all.css')
        .pipe(clean_css())
        .pipe(dest('public/styles'));
}

function concatJS() {
    return src([
        'resources/scripts/nav.js',
        'resources/scripts/translation.js'
    ]).pipe(concat('all.js'))
        .pipe(dest('resources/scripts'));
}

function jsMinifier() {
    return src('resources/scripts/all.js')
        .pipe(terser())
        .pipe(dest('public/scripts'));
}

function pngMinifier() {
    return src('resources/images/*.png')
        .pipe(imagemin())
        .pipe(dest('public/images'));
}

export default series(concatCSS, cssMinifier, concatJS, jsMinifier, pngMinifier);
