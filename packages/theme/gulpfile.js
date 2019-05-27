const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('packages/theme/src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(dest('lib/theme'))
}

function copyfont() {
  return src('packages/theme/src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('lib/theme/fonts'))
}

exports.build = series(compile, copyfont)
