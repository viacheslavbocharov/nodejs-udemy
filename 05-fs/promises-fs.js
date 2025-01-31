const fs = require('fs/promises');

fs.writeFile('./first.txt', 'First file text')
    .then(() => console.log('File was written'))
    .then(() => fs.appendFile('./first.txt', '\nOne more line'))
    .then(() => console.log('Appended text to file'))
    .then(() => fs.rename('./first.txt', './rename-first.txt'))
    .then(() => console.log('File was renamed'))
    .catch((err) => console.log(err));
