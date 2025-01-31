import stream from 'stream';
import fs from 'fs';

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, callback) {
        const upperCase = chunk.toString().toUpperCase();
        callback(null, upperCase);
    },
});

const reverseCaseStream = new stream.Transform({
    transform: function (chunk, encoding, callback) {
        const arrayOfChars = chunk.toString().split('');
        const lastChar = arrayOfChars.pop();
        const reverseCase = arrayOfChars.reverse().concat(lastChar).join('');
        callback(null, reverseCase);
    },
});

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseCaseStream)
    .pipe(process.stdout);

//Pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

//Pipe to stdour
// process.stdin.pipe(process.stdout)
