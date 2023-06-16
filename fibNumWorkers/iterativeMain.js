// Import required modules
const { Worker } = require("worker_threads");
const path = require("path");

// This function calculates Fibonacci number using worker thread
function calculateFibonacciInWorkerThread(value) {
  // We return a promise that will be resolved when worker finishes calculation
  return new Promise((resolve, reject) => {
    // Create new worker thread
    const worker = new Worker(path.join(__dirname, "iterativeWorker.js"), {
      workerData: value, // Send initial data to worker thread
    });

    // Listen to "message" event from worker thread
    // It is emitted when worker uses parentPort.postMessage(result)
    worker.on("message", resolve); // On message event, resolve the promise with received data

    // If worker throws error, reject the promise
    worker.on("error", reject);

    // Listen to "exit" event from worker thread
    // It is emitted when worker stops
    worker.on("exit", (code) => {
      if (code !== 0)
        // If worker stopped because of some error, reject the promise
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// Run the program
async function runRunRun() {
  // Define numbers for which we will calculate Fibonacci numbers
  const fibNumbers = [30, 31, 32, 33, 34, 35];

  // Start calculation for each number concurrently and wait until all workers finish
  const results = await Promise.all(
    fibNumbers.map((num) => calculateFibonacciInWorkerThread(num))
  );
  console.table(results);

  // Log the results
  results.forEach((result, index) => {
    console.log(`Fibonacci of ${fibNumbers[index]} = ${result}`);
  });
}

// Start the program
runRunRun();
