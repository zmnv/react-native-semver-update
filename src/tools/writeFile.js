/* eslint-disable no-console */
import { writeFileSync } from 'fs';

const consolePrefix = '[writeFile]';

function writeFile(filePath, data) {
    try {
        writeFileSync(filePath, data);
    } catch (error) {
        console.log(consolePrefix, error);
    }

    // console.log(`${consolePrefix} file updated:`, filePath);
}

function noWriteFileMessage() {
    console.log('NO CHANGES');
}

export {
    writeFile,
    noWriteFileMessage,
};
