import { fileURLToPath } from 'url';
import path from 'node:path';
import { readdir } from 'node:fs/promises';

const errorMsg = 'FS operation failed';
const folder = 'files';

const list = async () => {
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(modulePath, folder);

    try {
        const filesList = await readdir(folderPath);
        console.log(filesList);
    } catch (err) {
        throw new Error(errorMsg);
    }
};

await list();