// Основной модуль Gulp
import gulp from 'gulp'; // импортируем Gulp из папки gulp
// Импорт путей из gulp
import {path} from './gulp/config/path.js';
// Импорт общих плагинов
import {plugins} from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import {copy} from './gulp/tasks/copy.js';
import {reset} from './gulp/tasks/reset.js';
import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {scss} from './gulp/tasks/scss.js';
import {js} from './gulp/tasks/js.js';
import {images} from './gulp/tasks/images.js';
import {otfToTtf, ttfToWoff, fontStyle} from './gulp/tasks/fonts.js';
import {svgSprive} from './gulp/tasks/svgSprive.js';
import {zip} from './gulp/tasks/zip.js';
import {ftp} from './gulp/tasks/ftp.js';

// Наблюдатель за изменениями в файлах:
function watcher() {
  gulp.watch(path.watch.files, copy);
  // 1 аргумент - путь к файлам за которыми надо следить.
  // 2 аргумент - задачи, которые надо выполнить.
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export {svgSprive}; // Нужен будет очень редко.

// Последовательная обработка шрифтов:
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

// Константа, в которой занесены задачи, выполняющийся паралелльно:
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач:
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Экспорт сценариев
export {dev};
export {build};
export {deployZIP};
export {deployFTP};

// Выполнение задачи по умолчанию:
gulp.task('default', dev);
