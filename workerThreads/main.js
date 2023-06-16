const { Worker, isMainThread } = require("worker_threads");
const path = require("path");

if (isMainThread) {
  const worker = new Worker(path.join(__dirname, "worker.js"));
  worker.once("message", (message) => {
    console.log(`received message from worker: ${message}`);
  });
  worker.postMessage("ping");
}
