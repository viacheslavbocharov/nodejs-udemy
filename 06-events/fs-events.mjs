import { EventEmitter } from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

fileEmitter.on('writeComplet', () => {
    console.log('File was written');
    fs.appendFile('./first.txt', '\nOne more line', () => {
        fileEmitter.emit('appendComplet');
    });
});

fileEmitter.on('appendComplet', () => {
    console.log('Appended text to file');
    fs.rename('./first.txt', './rename-first.txt', () => {
        fileEmitter.emit('renameComplet');
    });
});

fileEmitter.on('renameComplet', () => {
    console.log('File was renamed');
});

fs.writeFile('./first.txt', 'First file text', () => {
    fileEmitter.emit('writeComplet');
});
