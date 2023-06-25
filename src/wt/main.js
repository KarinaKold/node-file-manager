import { cpus } from 'os';
import { Worker } from 'worker_threads';

const workerFile = './src/wt/worker.js';

let initWorkerData = 10;
const workersNum = cpus();

const performCalculations = async () => {
    const myPromises = workersNum.map((_, i) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerFile, { workerData: initWorkerData + i } );
    
            worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        })
    })
    
    const results = await Promise.all(myPromises);
    console.log(results);
};

await performCalculations();