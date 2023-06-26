import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const filename = './files/fileToWrite.txt';
const fileURL = new URL(filename, import.meta.url);

const write = async () => {
    const fileWriteStream = createWriteStream(fileURL, { flags: 'a'});
    await pipeline(process.stdin, fileWriteStream);
};

await write();