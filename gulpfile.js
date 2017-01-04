"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

// CSS
gulp.task('css', function () {
    return gulp.src('css/**/*.css')
        .pipe(concatCss("bundle.min.css"))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/style'))
        .pipe(connect.reload());
});

// HTML
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(connect.reload());
});

// Watch
gulp.task('watch', function () {
    gulp.watch('css/*.css', ['css']);
    gulp.watch(['app/*.html'], ['html']);
});

// Connect
gulp.task('connect', function () {
    connect.server({
        name: 'Dev App',
        root: ['app'],
        port: 8000,
        livereload: true
    });
});

// Build dev app
gulp.task('server', ['connect', 'html', 'css', 'watch']);

