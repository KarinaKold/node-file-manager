import { createReadStream, createWriteStream } from 'fs';
import { join, extname, isAbsolute, dirname, basename } from 'path';

const readStream = createReadStream(absoluteReadPathFile);
    const writeStream = createWriteStream(absoluteWritePathFile);

    const compressPromise = new Promise((resolve, reject) => {
      writeStream.on('finish', resolve());
      writeStream.on('error', reject());
      compressStream.on('error', reject());
    });

    readStream.pipe(compressStream).pipe(writeStream);

    try {
      await compressPromise;
    } catch (error) {
      throw new Error('Error');
    }
    } else {
      throw new Error('Error');
    }
