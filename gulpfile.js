/*

	Gulpfile de exemplo para algumas ações clássicas de otimização.
	
	Para aprender mais sobre Gulp, veja o Curso Online de Gulp do Alura:

		https://www.alura.com.br/curso-online-gulp

 */


var gulp = require('gulp');
var $ = require('gulp-load-plugins')({rename: {'gulp-rev-delete-original':'revdel'}});



/* Tasks base */
gulp.task('copy', function() {
    return gulp.src(['site/assets/{img,font}/**/*', 'site/app.yaml'], {base: 'site'})
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return gulp.src('dist/', {read: false})
		.pipe($.clean());
});



/* Minificação */
gulp.task('minify-js', function() {
  return gulp.src('site/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify-css', function() {
  return gulp.src('site/**/*.css')
    .pipe($.cssnano())
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify-html', function() {
  return gulp.src('site/**/*.html')
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
});



/* Concatenação */
gulp.task('useref', function () {
    return gulp.src('site/index.html')
        .pipe($.useref())
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});



/* Revisão de arquivos */
gulp.task('rev', function(){
  return gulp.src(['dist/**/*.css', 'dist/**/*.js'])
    .pipe($.rev())
    .pipe($.revdel())
    .pipe(gulp.dest('dist/'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('dist/'))
})

gulp.task('revreplace', ['rev'], function(){
  return gulp.src('dist/index.html')
    .pipe($.revReplace({manifest: gulp.src('dist/rev-manifest.json')}))
    .pipe(gulp.dest('dist/'));
});



/* Alias */
gulp.task('minify', ['minify-js', 'minify-css', 'minify-html']);
gulp.task('build', $.sequence(['minify-js', 'minify-css'], 'useref', 'revreplace'));
gulp.task('default', $.sequence('clean', 'copy', 'build'));


