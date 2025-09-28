// bs-reload.mts
import browserSync from 'browser-sync';

const bs = browserSync.create();

bs.init({
  proxy: 'http://localhost:8000',
  files: ['dist/server.mjs'],
  open: false,
  notify: false,
});
