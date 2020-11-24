const fse = require('fs-extra');
const { type } = require('os');
const path = require('path');

const destDir = './assets/_generated/fonts';
console.log('\nCopying typefaces to ' + destDir);

let typefaces = fse
  .readdirSync('./node_modules', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dir) => dir.name)
  .filter(dirName => dirName.startsWith('typeface-'));

for (let i = 0; i < typefaces.length; i++) {
  const typeface = typefaces[i];
  fse.copySync(path.join('./node_modules', typeface), path.join(destDir, typeface.substr(9)));
  console.log(' - copied: ' + typeface);
}

console.log('Done.\n');
