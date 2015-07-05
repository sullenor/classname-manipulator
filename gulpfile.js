'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var path = require('path');

var options = {
  ui: 'bdd',
  reporter: 'spec',
  bail: true
};

gulp.task('gaze', ['test'], function () {
  gulp.watch('test/*.js', ['test']);
});

gulp.task('test', function () {
  gulp.src('test/*.js')
    .pipe(mocha(options))
    .on('error', function () {});
});
