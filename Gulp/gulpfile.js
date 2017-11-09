// aqui se describen todas las tareas que hara gulp

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
  -- top level functions --

  gulp.task : definir tareas
  gulp.scr : apunta a los archivos para usar
  gulp.dest : apunta a los archivos output
  gulp.watch : trackea los archivos y carpetas para los cambios

*/

// logs message

gulp.task('message', function(){
  return console.log('Gulp is running');
});

gulp.task('default', ['message','copyHtml','imageMin','sass','concact']);

// copiar los archivos HTML

gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// optimize images
gulp.task('imageMin', () => {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

//minify js (optimize)
gulp.task('minify', () => {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

//compile sass
gulp.task('sass', () => {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

// concact files 
gulp.task('concact', () => {
  gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', () => {
   gulp.watch('src/js/*.js',['scripts']);
   gulp.watch('src/images/*',['imageMin']);
   gulp.watch('src/sass/*.scss',['sass']);
   gulp.watch('src/*.html',['copyHtml']);
});
