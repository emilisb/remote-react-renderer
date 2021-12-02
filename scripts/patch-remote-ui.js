const fs = require('fs');
const path = require('path');

const run = () => {
  fs.copyFileSync(
    path.resolve(__dirname, './patches/remote-ui/root.js'),
    path.resolve(__dirname, '../node_modules/@remote-ui/core/build/cjs/root.js')
  );

  fs.copyFileSync(
    path.resolve(__dirname, './patches/remote-ui/reconciler.js'),
    path.resolve(__dirname, '../node_modules/@remote-ui/react/build/cjs/reconciler.js')
  );
};

run();
