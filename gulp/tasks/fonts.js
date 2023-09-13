import fs from 'fs';
import fonter from 'gulp-fonter-unx'; // т.к. фонтер написан под винду надо юзать его
import ttf2woff2 from 'gulp-ttf2woff2';


export const otfToTtf = () => {
  return app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {}) // Получаем доступ к файлам шрифтов.
      .pipe(app.plugins.plumber( // Подключаем обработчик ошибок...
          app.plugins.notify.onError({ // Вывод ошибок
            title: 'FONTS',
            message: 'Error <%= error.message %>',
          }),
      ))

  // Конвертируем в .ttf:
      .pipe(fonter({
        formats: ['ttf'],
      }))
  // Выгружаем в исходную папку:
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`)); // Выгружаем файл с результатом...
};

export const ttfToWoff = () => {
  return app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {}) // Получаем доступ к файлам шрифтов.
      .pipe(app.plugins.plumber( // Подключаем обработчик ошибок...
          app.plugins.notify.onError({ // Вывод ошибок
            title: 'FONTS',
            message: 'Error <%= error.message %>',
          }),
      ))
  // Конвертируем в .woff:
      .pipe(fonter({
        formats: ['woff'],
      }))
  // Выгружаем файл с результатом...
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  // Ищем файлы шрифтов .ttf:
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  // Конвертируем в .woff2:
      .pipe(ttf2woff2())
  // Выгружаем в папку с результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontStyle = () => {
  // Файл стилей подключения шрифтов:
  const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

  // Проверяем существует ли файлы шрифтов:
  fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
    if (fontsFiles) {
      // Проверяем существует ли файл стилей для подключения шрифтов:
      if (!fs.existsSync(fontsFile)) {
        // Если файла нет, создаем его:
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i++) {
          // Записываем подключение шрифтов в файл стилей:
          const fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            const fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            const fontWeightName = fontWeight.toLowerCase();

                        fontWeightName === 'thin' ? fontWeight = 100 :
                        fontWeightName === 'extralight' ? fontWeight = 200 :
                        fontWeightName === 'light' ? fontWeight = 300 :
                        fontWeightName === 'medium' ? fontWeight = 500 :
                        fontWeightName === 'semibold' ? fontWeight = 600 :
                        fontWeightName === 'bold' ? fontWeight = 700 :
                        fontWeightName === 'extrabold' || fontWeightName === 'heavy' ? fontWeight = 300 :
                        fontWeightName === 'black' ? fontWeight = 800 :
                        fontWeight = 400;

                        fs.appendFile(fontsFile,
                            `@font-face {
                                font-family: ${fontName};
                                font-display: swap;
                                src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                                font-weight: ${fontWeight};
                                font-style: normal;
                            }\r\n`, cb,
                        );
                        newFileOnly = fontFileName;
          }
        }
      } else {
        console.log('Файл scss/fonts.css уже существует. Для обновления файла нужно его удалить!');
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() { }
};
