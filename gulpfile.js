
const gulp = require('gulp');
// （用于压缩 JS）
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
//压缩,合并 js
//重命名
const rename = require("gulp-rename");
gulp.task('minifyjs', function() {
	return gulp.src('browser/**/*.js')      //需要操作的文件//合并所有js到bundle.js
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
		.pipe(uglify())    //压缩
		.pipe(gulp.dest('build/dist'))
});
gulp.task('es6', () => {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'))
});
gulp.task('default', ['es6'], () => {
	gulp.watch('src/**/*.js', ['es6']);
});