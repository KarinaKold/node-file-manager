import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');

const filename = './files/fileToCalculateHashFor.txt';
const fileURL = new URL(filename, import.meta.url);

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

await calculateHash();