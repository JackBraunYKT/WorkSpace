import {configFTP} from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp'; // Отправляет файлы на FTP-сервер.
import util from 'gulp-util'; // Отображает ход копирования файла.

export const ftp = () => {
  configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  return app.gulp
      .src(`${app.path.buildFolder}/**/*.*`, {})
      .pipe(app.plugins.plumber(
          app.plugins.notify.onerror({
            title: 'FTP',
            message: 'Error: <&= error.message %>',
          }),
      ))
      .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};
