'use strict';

const SASS_SOURCE_FILES = './src/styles/**/*.scss';
const SASS_OUTPUT = './public/styles';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const build = function() {
	return gulp.src(SASS_SOURCE_FILES)
		.pipe(sass())
		.pipe(gulp.dest(SASS_OUTPUT))
};

gulp.task('build', build);

