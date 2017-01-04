**Step #1**

1. create package.json
<pre>
{
  "name": "gulp_project",
  "version": "1.0.0",
  "devDependencies": {
  }
}
</pre>
2. npm install --save-dev gulp
3. create gulpfile.js
<pre>
"use strict";

var gulp = require('gulp');

gulp.task('default', function() {
    // place code for your default task here
});
</pre>

**Step #2**
1. Set plugin: gulp-concat-css from: https://www.npmjs.com/package/gulp-concat-css/
2. Fix gulpfile.js

**Step #3**
1. Set plugin: gulp-minify-css-mpath from: https://www.npmjs.com/package/gulp-minify-css-mpath/
2. Fix gulpfile.js

**Step #4**
1. Create a new task: gulp watch
2. FIX gulpfile.js
<pre>
gulp.task('watch', function () {
    return gulp.watch('css/*.css', ['css'])
});
'css/*.css' -> path to css files
['css'] -> exist task
</pre>

**Step#4**
1. Set plugin: gulp-autoprefixer ( caniuse.com)
2. FIX gulpfile.js
<pre>
  .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
</pre>

**Step#5**
1. Set plugin: 
* gulp-connect: 
(**npm install --save-dev gulp-connect**) 
* plugin gulp-livereload:
 (**npm install --save-dev gulp-livereload**)

2. FIX gulpfile.js
<pre>
// Connect
gulp.task('connectDev', function () {
    connect.server({
        name: 'Dev App',
        root: ['app'],
        port: 8000,
        livereload: true
    });
});

// HTML
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(connect.reload());
});

// CSS
.pipe(connect.reload());

//WATCH
 gulp.watch(['./app/*.html'], ['html']);
</pre>

