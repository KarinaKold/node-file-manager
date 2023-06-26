import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');
import { readFile } from 'fs/promises';
import { join, extname, isAbsolute, dirname, basename } from 'path';

const calculateHash = async () => {
    const hash = createHash('sha256'); 
    const fileReadStream = createReadStream(fileURL);

    fileReadStream.on('readable', () => {
        const data = fileReadStream.read();
        
        if (data) {
            hash.update(data);
        } else {
            const hashString = hash.digest('hex'); 
            console.log(hashString);
        }
    })
};