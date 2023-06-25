import path from 'node:path';
import { rename as renamePromise } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const errorMsg = 'FS operation failed';
const fileName = 'files/wrongFilename.txt';
const newFileName = 'files/properFilename.md';

const rename = async () => {
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(modulePath, fileName);
    const newFilePath = path.join(modulePath, newFileName);

    try {
        await renamePromise(filePath, newFilePath)
    } catch (err) {
        throw new Error(errorMsg);
    }
};

await rename();