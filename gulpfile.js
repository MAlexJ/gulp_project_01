"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');

// CSS
gulp.task('css', function () {
    return gulp.src('css/**/*.css')
        .pipe(concatCss("bundle.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/style'));
});

// WATCH
gulp.task('watch', function () {
    return gulp.watch('css/*.css', ['css'])
});