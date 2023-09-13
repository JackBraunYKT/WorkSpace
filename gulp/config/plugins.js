import replace from 'gulp-replace'; // Поиск и замена.
import plumber from 'gulp-plumber'; // Обработка ошибок.
import notify from 'gulp-notify'; // Сообщения (подсказки).
import browserSync from 'browser-sync'; // Локальный сервер.
import newer from 'gulp-newer'; // Проверка обновления изображения.
import ifPlugin from 'gulp-if'; // Условное ветвление.

export const plugins = {
  plumber: plumber,
  notify: notify,
  replace: replace,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
