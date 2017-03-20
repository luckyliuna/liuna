var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    coffee = require('gulp-coffee'),
    browerSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('myBlog/css'))
})

gulp.task('jade', function() {
    return gulp.src('app/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('myBlog'))
})

gulp.task('coffee', function() {
    return gulp.src('app/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('myBlog/js'))
})

gulp.task('browerSync', function() {
    browerSync({
        server: {
            baseDir: 'myBlog'
        }
    })
})

var reload = browerSync.reload;
gulp.task('watch', ['browerSync', 'jade', 'sass', 'coffee'], function() {
    gulp.watch('app/*.jade', ['jade']);
    gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/coffee/*.coffee', ['coffee']);

    gulp.watch('myblog/**/*.*').on('change', reload)
})