var babel = require('gulp-babel');
var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('src/**/*.@(js|jsx)')
        .pipe(babel())
        .pipe(gulp.dest('./dist/app'));
});
