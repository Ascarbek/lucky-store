/**
 * Created by Ascarbek on 26.10.2015.
 */

var gulp = require('gulp'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    babel = require('gulp-babel'),
    inject = require('gulp-inject'),
    es = require('event-stream'),
    series = require('stream-series'),
    _ = require('underscore');

gulp.task('inject-dev', function(){

    var angular = gulp.src(['client/vendor/angular/angular.min.js'], {read : false});
    var restVendor = gulp.src(['client/vendor/**/*.min.js', '!client/vendor/angular/angular.min.js'], {read : false});

    var project = gulp.src(['client/app/core/app.js'], {read : false});
    var restProject = gulp.src(['client/app/**/*.js', '!client/app/core/app.js'], {read : false});

    var common = gulp.src(['client/content/style/common.css'], {read: false});
    var restCss = gulp.src(['client/content/icon/style.css' , 'client/content/style/**/*.css', '!client/content/style/common.css'], {read: false});
    var appCss = gulp.src(['client/app/**/*.css'], {read: false});

    return gulp.src('client/index.html')
        .pipe(inject(series(angular, restVendor, project, restProject), {relative : true}))
        .pipe(inject(series(common, restCss, appCss), {relative : true}))
        .pipe(gulp.dest('client'));
});

gulp.task('build-dev', ['inject-dev']);

gulp.task('default', ['build-dev']);
