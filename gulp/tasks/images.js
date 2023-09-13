import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
  return app.gulp
      .src(app.path.src.images) // Получаем доступ к файлу.
      .pipe(app.plugins.plumber( // Подключаем обработчик ошибок...
          app.plugins.notify.onError({ // Вывод ошибок
            title: 'IMG',
            message: 'Error <%= error.message %>',
          }),
      ))

      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(
          app.plugins.if(app.isBuild,
              webp(),
          ),
      )
      .pipe(
          app.plugins.if(app.isBuild,
              app.gulp.dest(app.path.build.images),
          ),
      ) // Выгружаем файл с результатом...

      .pipe(
          app.plugins.if(app.isBuild,
              app.gulp.src(app.path.src.images),
          ),
      )
      .pipe(
          app.plugins.if(app.isBuild,
              app.plugins.newer(app.path.build.images),
          ),
      )
      .pipe(
          app.plugins.if(app.isBuild,
              imagemin({
                progressive: true,
                svgoPlagins: [{reomveViewBox: false}],
                interlaced: true,
                optimizationLevel: 3, // 0 to 7
              }),
          ),
      )
      .pipe(app.gulp.dest(app.path.build.images)) // Выгружаем файл с результатом...

      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.build.images)) // Выгружаем файл с результатом...
      .pipe(app.plugins.browserSync.stream()); // Обновляем инфу на локальном сервере и отображаем в браузере результат
};
