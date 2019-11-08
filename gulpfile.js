'use strict';

const path = require('path');

const SASS_SOURCE_FILES = './src/styles/**/*.scss';
const SASS_OUTPUT = './public/styles';
const SASS_INCLUDE_DIRECTORIES = [
	path.join(__dirname, '/node_modules/bootstrap/scss/')
];


const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const build = function() {
	return gulp.src(SASS_SOURCE_FILES)
		.pipe(sass({ includePaths: SASS_INCLUDE_DIRECTORIES }))
		.pipe(gulp.dest(SASS_OUTPUT))
};

gulp.task('build', build);

