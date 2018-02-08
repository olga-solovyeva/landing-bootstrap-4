const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // Add vendor prefixes
const minifyCSS = require('gulp-minify-css'); // Minify the CSS

gulp.task('default', () => {
    gulp
        .src('style.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false,
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(''));
});
