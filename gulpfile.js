const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function convertToCss() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./css/'))
};

function watch() {
    gulp.watch('./scss/**/*.scss', convertToCss);
}

exports.build = gulp.series(convertToCss, watch);

