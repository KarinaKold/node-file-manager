import path from 'path';
import { platform } from 'node:process';

const path = { path: os.homedir().toString() };

export function up() {
    const parts = path.path.split(path.sep);

    if (platform !== "win32") {
        parts.shift()
    };

    if (parts.length > 1) {
        parts.pop();
        path.path = parts.join(path.sep);
    } else {
        if (platform === "win32") return;
        if (platform !== "win32") {
            path.path = path.sep;
        }
    }
}