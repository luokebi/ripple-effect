var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-cssmin'),
	clean = require('gulp-clean');


gulp.task('clean', function() {
	return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('js',['clean'], function() {
	return gulp.src('src/jquery.rippleEffect.js')
				.pipe(uglify())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('dist'));
});

gulp.task('css', ['clean'], function() {
	return gulp.src('src/jquery.rippleEffect.css')
				.pipe(cssmin())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'css'], function() {

});