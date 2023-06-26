import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const errorMsg = 'FS operation failed';
const fileToReadName = 'files/fileToRead.txt';

const read = async () => {
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(modulePath, fileToReadName);

    try {
        const contents = await readFile(filePath, 'utf-8');
        console.log(contents);
    } catch (err) {
        throw new Error(errorMsg);
    }
};

await read();