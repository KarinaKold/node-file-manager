// import  process  from 'node:process';
// import  path  from 'node:path';
// import { dirname, join } from 'node:path';
// import { pipeline } from 'node:stream/promises';
// import { Transform } from 'node:stream';
// import  os  from 'node:os';
// import { readdir } from 'node:fs/promises';
// import { statSync } from 'node:fs';
// import { fileURLToPath } from 'node:url';

import { welcomeUser } from './greeting/welcomeUser.js';

welcomeUser();

console.log(`\nYou are currently in ${currentPath.path}`);