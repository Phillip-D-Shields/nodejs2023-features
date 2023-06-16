const { parentPort, workerData } = require("worker_threads");

// Define a recursive function to calculate Fibonacci number
function fibonacci(n) {
  // The base case of the recursion
  // If n is 0 or 1, the function returns n itself because those are the first two numbers in the Fibonacci sequence
  if (n <= 1) return n;

  // The recursive case of the function
  // If n is larger than 1, the function calls itself twice with new arguments (n - 1) and (n - 2),
  // and sums the results of these two calls
  // This corresponds to the fact that every number in the Fibonacci sequence
  // is the sum of the two preceding ones
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// The worker receives the initial data (a number n) from the main thread
// It calculates the Fibonacci number for n by calling the fibonacci function
// Then it sends the result back to the main thread by calling parentPort.postMessage
parentPort.postMessage(fibonacci(workerData));
