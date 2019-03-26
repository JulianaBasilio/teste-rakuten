// Variables
var gulp    = require('gulp');
var sass    = require('gulp-sass');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');

//Sources
var scssFiles = './src/scss/style.scss';
var jsFiles    = [
    './src/js/vendor/jquery-3.3.1.min.js',
    './src/js/vendor/bootstrap.min.js',
    './src/js/vendor/slick.min.js',
    './src/js/main.js'
];

var srcCopy = {
    fonts: './src/fonts/**/*.{woff,woff2}',
    images: './src/img/**/*.{gif,png,jpg}'
};

//Destination
var cssDest     = './dist/css';
var jsDest      = "./dist/js";
var jsDest_name = "bundle.min.js";
var distCopy = {
    fonts: './dist/fonts/',
    images: './dist/img/'
};

//Options for development
var sassDevOptions = {
    outputStyle: 'expanded'
}

//Options for production
var sassProdOptions = {
    outputStyle: 'compressed',
    includePaths: [
        './src/scss/vendor/'
    ]
}

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'scripts', 'fonts', 'images', 'watch']);

gulp.task('fonts', function () {
    return gulp.src(srcCopy.fonts).pipe(gulp.dest(distCopy.fonts));
  });

  gulp.task('images', function () {
    return gulp.src(srcCopy.images).pipe(gulp.dest(distCopy.images));
  });

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
    return gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat(jsDest_name))
        .pipe(gulp.dest(jsDest));
});

//Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function(){
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
    gulp.watch(jsFiles, ['scripts']);
    gulp.watch(srcCopy.fonts, ['fonts']);
    gulp.watch(srcCopy.images, ['images']);
});