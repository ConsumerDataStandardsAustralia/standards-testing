const jtt = require('json-schema-to-typescript')
const fs = require('fs')
const path = require('path');

const fileParseRegEx = /cdr-test-data-schema\.(\d+\.\d+\.\d+)\.json/;

const srcPath = '../../schema/';
const dstPath = './src/schema/';

const files = fs.readdirSync(srcPath);

files.forEach((file) => {
  if (path.basename(file).match(fileParseRegEx)) {
    try {
      console.log('Create schema folder')
      fs.mkdirSync(dstPath, { recursive: true })
    } catch(err) {
      console.log(err.message);
    }

    try {
      console.log(`Parsing: ${path.basename(file)}`)
      const src = path.join(srcPath, file);
      const dst = path.join(dstPath, path.basename(file, '.json') + '.ts');

      jtt.compileFromFile(src)
        .then(ts => fs.writeFileSync(dst, ts))
        .catch(err => console.log(err.message));
    } catch(err) {
      console.log(err.message);
    }

    try {
      console.log(`Copying: ${path.basename(file)}`)
      const src = path.join(srcPath, file);
      const dst = path.join(dstPath, file);
      fs.copyFileSync(src, dst);
    } catch(err) {
      console.log(err.message);
    }
  }
});
