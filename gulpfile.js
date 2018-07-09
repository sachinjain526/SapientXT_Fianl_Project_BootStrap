var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync').create();
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});
gulp.task('sass', function () {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
gulp.task('js', ['clean'], function () {
    return gulp.src(["node_module/"])
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest("./src/js"))
        .pipe(browserSync.stream());
});
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);