export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`,
      index: 'index.html',
    },
    notify: false,
    port: 3000,
  });
};
