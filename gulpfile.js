var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');

// Variables

//Sources
var scssFiles = './src/scss/style.scss';
var js_dev    = [
    './src/js/vendor/jquery-3.3.1.min.js',
    './src/js/vendor/bootstrap.min.js',
    './src/js/vendor/slick.min.js',
    './src/js/main.js'
];

//CSS destination
var cssDest      = './src/css';
var js_dist      = "./dist/js";
var js_dist_name = "bundle.min.js"

//Options for development
var sassDevOptions = {
    outputStyle: 'expanded'
}

//Options for production
var sassProdOptions = {
    outputStyle: 'compressed'
}

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'scripts', 'watch']);

//Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

//Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Scripts Task
gulp.task('scripts', function() {
    return gulp.src(js_dev)
        .pipe(uglify())
        .pipe(concat(js_dist_name))
        .pipe(gulp.dest(js_dist));
});

//Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function(){
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});