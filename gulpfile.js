var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});
gulp.task('webfont', function () {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*') // Gets all files ending with .scss in app/scss
        .pipe(gulp.dest('app/webfonts'))
        .pipe(browserSync.stream());
});
gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/popper.js/dist/umd/popper.js']) // Gets all files ending with .scss in app/scss
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.stream());
});
gulp.task('browser-sync', function () {
    browserSync.init(["app/css/*.css", "app/js/*.js"], {
        server: {
            baseDir: "./app"
        }
    });
});
gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/index.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});
//The default task (called when you run `gulp` from cli)

gulp.task('default', ['js', 'webfont', 'watch']);