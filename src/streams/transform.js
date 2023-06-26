import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const reverseTransformStreem = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    })
    stdin.pipe(reverseTransformStreem).pipe(stdout);
};

await transform();