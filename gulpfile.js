var gulp = require("gulp");
var babel = require("gulp-babel");
var minify = require('gulp-minify');

gulp.task("default", function () {
  return gulp.src("src/pullload.js")
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest("dist"));
});
