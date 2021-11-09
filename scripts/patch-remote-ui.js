const fs = require('fs');
const path = require('path');

const run = () => {
  fs.copyFileSync(
    path.resolve(__dirname, './patches/remote-ui/root.js'),
    path.resolve(__dirname, '../node_modules/@remote-ui/core/build/cjs/root.js')
  );
};

run();
