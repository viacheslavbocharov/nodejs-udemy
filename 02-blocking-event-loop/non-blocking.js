const fs = require('fs');
let isRuning = true;

setTimeout(() => (isRuning = false), 1);
process.nextTick(() => console.log('next tick'));

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve());
  });
}

async function whileLoop() {
  while (isRuning) {
    console.log('While loop is running...');
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log('Ended'));
