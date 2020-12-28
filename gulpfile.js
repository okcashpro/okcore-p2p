'use strict';

var gulp = require('gulp');
var okcoreTasks = require('okcore-build');

okcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
