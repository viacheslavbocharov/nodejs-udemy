const fs = require('fs');
//Adoid using sync code, it will block main flow
try {
    fs.writeFileSync('./first.txt', 'First file text');
    console.log('File was written');
    fs.appendFileSync('./first.txt', '\nOne more line');
    console.log('Appended text to file');
    fs.renameSync('./first.txt', './rename-first.txt');
    console.log('File was renamed');
} catch (err) {
    console.log(err);
}
