import fs from 'fs';

const fileName = './files/fifth.txt';
const copiedFileName = './files/fifth-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStrean = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStrean);

readStream.on('end', () => console.log('Read stream ended'));
writeStrean.on('finish', () => console.log('File was copied'));
writeStrean.on('close', () => console.log('Write stream closed'));

// node copy-files-in-folder.mjs
