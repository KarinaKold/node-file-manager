import { fork } from 'node:child_process';

const filename = './files/script.js';
const fileURL = new URL(filename, import.meta.url);

const spawnChildProcess = async (args) => {
    const childProcess = fork(fileURL, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
const someArgument1 = 'someArgument1';
const someArgument2 = 'someArgument2';
spawnChildProcess( /*[someArgument1, someArgument2]*/ );
