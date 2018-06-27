const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/dwxComponent/runtime.js',
    './dist/dwxComponent/scripts.js',
    './dist/dwxComponent/polyfills.js',
    './dist/dwxComponent/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/world-cup.js');

  console.info('Wold Cup Element created successfully!');
})();
