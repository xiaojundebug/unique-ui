const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const path = require('path')

const inputPath = path.resolve(__dirname, './src')
const outputPath = path.resolve(__dirname, '../../lib/theme')

function compile() {
  return src(inputPath + '/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(dest(outputPath))
}

function copyfont() {
  return src(inputPath + '/fonts/**')
    .pipe(cssmin())
    .pipe(dest(outputPath + '/fonts'))
}

exports.build = series(compile, copyfont)
