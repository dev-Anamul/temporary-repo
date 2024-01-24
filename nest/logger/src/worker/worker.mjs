import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: 'Hello from main thread!',
  });
  worker.on('message', (message) => {
    console.log(`Message from worker: ${message}`);
  });
} else {
  let count = 0;
  for (let i = 0; i < 10000000000; i++) {
    count++;
  }
  parentPort.postMessage(`Hello from worker thread! ${count}`);
}
