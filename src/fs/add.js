import { appendFile } from 'fs/promises';
import { join, extname } from 'path';
import { access , stat} from 'fs/promises';
import { constants } from 'fs';

export async function isFilePath(path) {
  try {
    const stats = await stat(path);

    if (stats.isFile()) {
      await access(path, constants.R_OK | constants.W_OK);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

const filePath = join(currentPath.path, fileName);

export async function add(fileName) {
  const existFile = await isFilePath(filePath);

  if (existFile) {
    throw new Error('Error');
  }
  if (extname(fileName) === '') {
    throw new Error('Error');
  }

  try {
    await appendFile(filePath, '');
  } catch (error) {
    throw new Error('Error');
  }
}
