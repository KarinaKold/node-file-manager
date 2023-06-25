import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const errorMsg = 'FS operation failed';
const folderName = 'files';
const folderCopyName = 'files_copy';

const copy = async () => {
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(modulePath, folderName);
    const folderCopyPath = path.join(modulePath, folderCopyName);

    try {
        const srcFiles = await readdir(folderPath);
        await mkdir(folderCopyPath);

        for (const fileName of srcFiles) {
            const srcFile = path.join(folderPath, fileName);
            const newFile = path.join(folderCopyPath, fileName);
            copyFile(srcFile, newFile);
        }
    } catch (err) {
        throw new Error(errorMsg);
    }
};

await copy();
