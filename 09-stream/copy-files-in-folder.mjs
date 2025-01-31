import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
    console.log(`Sourse dir ${sourceDir} does not exist`);
    process.exit(0);
}

if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, { recursive: true});
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName);
        const destinationFilePath = path.join(
            destinationDir,
            `${index + 1}. ${fileName}`
        );

        const readFileStream = fs.createReadStream(sourceFilePath);
        const writeFileStrem = fs.createWriteStream(destinationFilePath);

        readFileStream.pipe(writeFileStrem);

        writeFileStrem.on('finish', () =>
            console.log(`File ${fileName} was copied`)
        );
    });
});
