const { parentPort, workerData } = require("worker_threads");

function fibonacci(n) {
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacci(30));

parentPort.postMessage(fibonacci(workerData));
