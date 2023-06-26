import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const newFile = 'fresh.txt';
const content = 'I am fresh and young';
const errorMsg = 'FS operation failed';

const create = async () => {
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(modulePath, 'files', newFile);

    try {
        await writeFile(filePath, content, { flag: 'wx'});
    } catch (err) {
        throw new Error(errorMsg);
    }
};

await create();