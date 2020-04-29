"use strict";

var config = {
    server: {
        baseDir: './build'
    },
    port: 3000,
    notify: false,
    open: false
};

var path = {
    dist: {
        main: 'build/',
        assets: 'build/assets/',
        js: 'build/assets/js/'
    },
    app: {
        html: 'app/*.html',
        scss: 'app/css/main.scss',
        assets: 'app/assets/'

    },
    watch: {
        html: 'app/**/*.html',
        scss: 'app/_sass/**/*.scss',
        js: 'app/js/**/*.js',
        assets: 'app/assets/**/*.*'

    },
    clean: './build/'
};

var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    del = require('del'),
    fileinclude = require('gulp-file-include'),
    plumber = require('gulp-plumber'),
    gulpif      = require('gulp-if')
 ;

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "dev";


gulp.task('browserSync', function(done) {
    browserSync.init(config);
    done();
});

gulp.task('html', function(calback) {
    gulp.src('./app/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './app/_include'
        }))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream:true}));
    calback()
});

gulp.task('scss', function () {
    return gulp.src('./app/_sass/main.scss')
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulpif(isDevelopment ,sourcemaps.write()))
        .pipe(gulp.dest('./build/assets/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function(done) {
    gulp.src('app/js/**/*.js')
        .pipe(plumber())
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(gulpif(isDevelopment ,sourcemaps.write()))
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.reload({ stream: true }));
    done();
});

gulp.task('clean', function(done) {
    del.sync(path.clean);
    done();
});

gulp.task('move', function(done) {
    gulp.src('app/assets/**')
        .pipe(gulp.dest(path.dist.assets));
    done();
});

gulp.task('build', gulp.series('clean', 'html', 'scss', 'js',  function(done) {
    done();
}));


gulp.task('watch', function() {
    gulp.watch(path.watch.html, gulp.series('html'));
    gulp.watch(path.watch.scss, gulp.series('scss'));
    gulp.watch(path.watch.js, gulp.series('js'));
    gulp.watch([path.watch.assets], gulp.series('move'));
});

// задача по умолчанию
gulp.task('default', gulp.series('clean', 'move', 'build', gulp.parallel('browserSync', 'watch')));