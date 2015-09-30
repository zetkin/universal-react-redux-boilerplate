var babel = require('gulp-babel');
var gulp = require('gulp');
var shell = require('gulp-shell');

var babelOptions = {
    stage: 1
};

gulp.task('default', function() {
    gulp.src('src/**/*.@(js|jsx)')
        .pipe(babel(babelOptions))
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('restartDevServer', shell.task([
    'docker exec env_app_1 sv restart app'
]));

gulp.task('watch', function() {
    return gulp.watch('src/**/*.@(js|jsx)', ['restartDevServer'])
        .on('change', function(ev) {
            console.log(ev.path);
            return gulp.src(ev.path)
                .pipe(babel(babelOptions))
                .pipe(gulp.dest('./dist/app'));
        });
});
