import path from 'path';
import { readdir } from 'fs/promises';

const path = { path: os.homedir().toString() };

export async function directory() {
    const files = await readdir(path.path, { withFileTypes: true });

    const getFilesInfo = files.map(el => ({
        name: el.name,
        type: el.isFile() ? 'file' : 'directory'
    })).sort((a, b) => {
        if (a.type === b.type) {
            return a.name.localeCompare(b.name);
        } else {
            return (a.type === 'directory') ? -1 : 1;
        }
    });

    console.table(getFilesInfo);
}