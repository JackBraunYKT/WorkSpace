// Получаем имя папки проекта:
import * as nodePath from 'path'; // Импортировать все экспортируемые значения из модуля 'path' и задать его свойству nodePath.
const rootFolder = nodePath.basename(nodePath.resolve()); // => Имя папки проекта.

const srcFolder = './src';
const buildFolder = './dist';

export const path = {
  src: {
    files: `${srcFolder}/files/**/*.*`, // ** - проверка на вложенность.
    // *.* - файлы с любым названием и любым расширением.
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/style.scss`,
    js: `${srcFolder}/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif.webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/modules/**/*.html`,
    scss: `${srcFolder}/modules/**/*.scss`,
    js: `${srcFolder}/modules/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif.webp}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  fth: `test`,
};
