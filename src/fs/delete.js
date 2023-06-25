import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const errorMsg = 'FS operation failed';
const fileToRemoveName = 'files/fileToRemove.txt';

const remove = async () => {
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(modulePath, fileToRemoveName);

    try {
        await rm(filePath);
    } catch (err) {
        throw new Error(errorMsg);
    }
};

await remove();