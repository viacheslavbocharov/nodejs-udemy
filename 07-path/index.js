const path = require('path');
const { text } = require('stream/consumers');

const filePath = '/Users/slava/Desktop/node/index.js';
const textFilePath = '/Users/slava/Desktop/node/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); //true
console.log(path.isAbsolute(relativePath)); //false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // /Users/slava/Desktop/node
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(relativePath)); // c:\Users\viach\Documents\IT_courses\Node.js\Node-Udemy\node\movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directoryPath)); // empty line

console.log(path.parse(filePath));
// {
//     root: '/',
//     dir: '/Users/slava/Desktop/node',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
const parsedPath = path.parse(filePath);
console.log(path.join(parsedPath.dir, `rename-${parsedPath.name}.mjs`));
