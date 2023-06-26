import { path, join, isAbsolute } from 'path';
import os from 'os';
import { directory } from './directory.js';

const currentPath = { path: os.homedir().toString() };

export async function cd(userPath) {
    if (!userPath.endsWith(path.sep)) {
      userPath += path.sep;
    }

  const newPath = join(currentPath.path, userPath);

    if (isAbsolute(userPath)) {
      if (await isDirectory(userPath)) {
        currentPath.path = userPath.slice(0, -1);
      } else {
        throw new Error('Error');
      }
      return;
    }

    if (await directory(newPath)) {
      currentPath.path = newPath.slice(0, -1);
    } else {
      throw new Error('Error');
    }
}
