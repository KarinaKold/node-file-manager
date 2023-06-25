import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const filename = './files/fileToCompress.txt';
const zipFilename = './files/archive.gz';
const fileURL = new URL(filename, import.meta.url);
const zipFileURL = new URL(zipFilename, import.meta.url);

const compress = async () => {
    pipeline(createReadStream(fileURL), createGzip(), createWriteStream(zipFileURL));
};

await compress();