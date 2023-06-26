import { createReadStream } from 'fs';
import { join, isAbsolute } from 'path';

export async function cat(userPath) {
  let catPath = join(path.path, userPath);
  if (isAbsolute(userPath)) {
    catPath = userPath;
  }
  const checkIsFile = await isFileAccessible(catPath);

  return new Promise((resolve, reject) => {
    if (checkIsFile) {
      const rs = createReadStream(catPath);
      rs.on('data', (data) => rl.output.write(data));
      rs.on('error', (error) => {
        reject(new Error('Error'));
      });
      rs.on('end', () => {
        resolve();
      });
    } else {
      reject(new Error('Error'));
    }
  });
}
