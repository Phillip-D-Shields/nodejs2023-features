const { parentPort } = require("worker_threads");

parentPort.once("message", (message) => {
  console.log(`received message from main thread: ${message}`);
  parentPort.postMessage("pong");
});
