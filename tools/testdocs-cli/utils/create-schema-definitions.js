const jtt = require('json-schema-to-typescript')
const fs = require('fs')
const path = require('path');

//const basePath = '../..';
const sourcePath = path.join(__dirname, '../../..',  'schema');
const destPath = path.join(__dirname, '../..',  'testdocs-cli/src/schema');
const files = fs.readdirSync(sourcePath);

files.forEach((file) => {
  if (path.extname(file) === '.json') {
    try {
      const src = path.join(sourcePath, file);
      const dst = path.join(destPath, path.basename(file, '.json') + '.ts');

      jtt.compileFromFile(src)
        .then(ts => fs.writeFileSync(dst, ts))
        .catch(err => console.log(err.message));
    } catch(err) {
      console.log(err.message);
    }
  }
});
