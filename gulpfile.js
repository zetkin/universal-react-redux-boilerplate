var babel = require('gulp-babel');
var gulp = require('gulp');
var newer = require('gulp-newer');
var shell = require('gulp-shell');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var babelConfig = {
    stage: 0
};

var jsSrc = 'src/**/*.@(js|jsx)';
var jsDest = 'dist/app';

gulp.task('bundleJs', [ 'js' ], function(cb) {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            console.log('WEBPACK ERROR: ' + err);
        }

        cb();
    });
});

gulp.task('default', [ 'bundleJs' ]);

gulp.task('js', function() {
    var newerConfig = {
        dest: jsDest,
        ext: '.js'
    };

    return gulp.src(jsSrc)
        .pipe(newer(newerConfig))
        .pipe(babel(babelConfig))
        .pipe(gulp.dest(jsDest));
});

gulp.task('reloadJs', [ 'bundleJs' ], shell.task([
    'docker exec env_app_1 sv restart app'
]));

gulp.task('watch', function() {
    gulp.watch(jsSrc, [ 'reloadJs' ]);
});
