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

/*gulp.task('clean', function(){
    return del(['build']);
});

gulp.task('build-fonts', ['clean'], function(){
    var fontAwesome = gulp.src([
        'vendor/font-awesome/fonts/!*'
    ])
        .pipe(gulp.dest('build/fonts/FontAwesome'));
    var openSans = gulp.src([
        'vendor/open-sans-fontface/fonts/!**'
    ])
        .pipe(gulp.dest('build/fonts/OpenSans'));
    var icomoon = gulp.src([
        'src/icomoon/fonts/!*'
    ]).pipe(gulp.dest('build/icons/fonts'));

    return es.merge(fontAwesome, openSans, icomoon);
});

gulp.task('build-js-dev', ['clean'], function(){
    var vendor = gulp.src([
        'vendor/!**!/!*.min.js'
    ]).pipe(gulp.dest('build/vendor'));

    var project = gulp.src([
        'src/js/!**!/!*.js'
    ])
        .pipe(babel())
        .pipe(gulp.dest('build/js'));

    return es.merge(vendor, project);
});

gulp.task('build-css-dev', ['clean'], function(){
    var fontCss = gulp.src([
        'src/modifiedVendorCss/font-awesome.css',
        'src/modifiedVendorCss/open-sans.css'
    ]).pipe(gulp.dest('build/css'));

    var pc = gulp.src([
        'src/css/!**!/!*.css'
    ]).pipe(gulp.dest('build/css'));

    var icomoon = gulp.src([
        'src/icomoon/style.css'
    ]).pipe(gulp.dest('build/icons'));

    return es.merge(fontCss, pc, icomoon);
});

gulp.task('build-html-dev', ['clean'], function(){
    var index = gulp.src(['src/index.html']).pipe(gulp.dest('build'));
    var templates = gulp.src([
        'src/templates/!**!/!*.html'
    ]).pipe(gulp.dest('build/templates'));

    return es.merge(index, templates);
});

gulp.task('build-media', ['clean'], function(){
    return gulp.src(['src/image/!**!/!*']).pipe(gulp.dest('build/image'));
});*/

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
