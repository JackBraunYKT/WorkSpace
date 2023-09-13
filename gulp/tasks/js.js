import webpack from 'webpack-stream';

export const js = () => {
  return app.gulp
      .src(app.path.src.js, {sourcemaps: app.isDev}) // Получаем доступ к файлу.
      .pipe(app.plugins.plumber( // Подключаем обработчик ошибок...
          app.plugins.notify.onError({ // Вывод ошибок
            title: 'JS',
            message: 'Error <%= error.message %>',
          }),
      ))
      .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js',
        },
      }))
      .pipe(app.gulp.dest(app.path.build.js)) // Выгружаем файл с результатом...
      .pipe(app.plugins.browserSync.stream()); // Обновляем инфу на локальном сервере и отображаем в браузере результат
};
