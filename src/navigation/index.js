import { up } from './up.js';
import { cd } from './cd.js';
import { directory } from './directory.js';
import { cat } from './cat.js';
import { add } from './add.js';
import { rename } from './rename.js';
import { copy } from './copy.js';
import { del } from './delete.js';
import { osInfo } from './osInfo.js';
import { hash } from './hash.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';

export async function switchCommandDistributor(command) {
    const key = command.split(' ')[0].trim();
    const arg = command.slice(key.length).trim();

    switch (key) {
        case 'up':
            await up();
        break;
        case 'cd':
            await cd(arg);
        break;
        case 'ls':
            await logDirectoryInfo();
        break;
        case 'cat':
            await cat(arg);
        break;
        case 'add':
            await add(arg);
        break;
        case 'rn':
            await rename(arg);
        break;
        case 'cp':
            await copy(arg);
        break;
        case 'mv':
            await copy(arg, 'move');
        break;
        case 'rm':
            await del(arg);
        break;
        case 'os':
            await osInformation(arg);
        break;
        case 'hash':
            await hash(arg);
        break;
        case 'compress':
            await compress(arg);
        break;
        case 'decompress':
            await decompress(arg);
        break;

        default:
            throw new Error('error');
    }
}