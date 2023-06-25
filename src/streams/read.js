import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const filename = './files/fileToRead.txt';
const fileURL = new URL(filename, import.meta.url);

const read = async () => {
    const fileReadStream = createReadStream(fileURL);
    await pipeline(fileReadStream, process.stdout);
};

await read();