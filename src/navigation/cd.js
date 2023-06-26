import { path, join, isAbsolute } from 'path';
import os from 'os';
import fs from 'fs/promises';

export async function directoryPath(path) {
    try {
        const stats = await fs.stat(path);
        return stats.directoryPath();
    } catch (error) {
        return false;
    }
}

const currentPath = { path: os.homedir().toString() };

export async function cd(userPath) {
    if (!userPath.endsWith(path.sep)) {
      userPath += path.sep;
    }

  const newPath = join(currentPath.path, userPath);

    if (isAbsolute(userPath)) {
      if (await directoryPath(userPath)) {
        currentPath.path = userPath.slice(0, -1);
      } else {
        throw new Error('Error');
      }
      return;
    }

    if (await directoryPath(newPath)) {
      currentPath.path = newPath.slice(0, -1);
    } else {
      throw new Error('Error');
    }
}
