var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync').create();

// gulp.task('sass', function () {
//     return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
//         .pipe(sass())
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });
// gulp.task('browser-sync', function () {
//     browserSync.init(["css/*.css", "js/*.js"], {
//         server: {
//             baseDir: "./app"
//         }
//     });
// });
// gulp.task('watch', ['browserSync', 'sass'], function () {
//     gulp.watch('app/scss/**/*.scss', ['sass']);
//     // Reloads the browser whenever HTML or JS files change
//     gulp.watch('app/*.html', browserSync.reload);
//     gulp.watch('app/js/**/*.js', browserSync.reload);
// });
// The default task (called when you run `gulp` from cli)
gulp.task("build", function () {
    console.log("sachin")
});
gulp.task('default', 'build');