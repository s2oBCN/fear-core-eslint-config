'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('test', ['lint'], function() {
    return gulp.src(['test/*.spec.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec',
            globals: {
                expect: require('chai').expect
            }
        }));
});

gulp.task('lint', function () {
    return gulp.src(['*-config.js', 'test/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
    gulp.watch(['*-config.js', 'test/*.spec.js'], ['test']);
});
