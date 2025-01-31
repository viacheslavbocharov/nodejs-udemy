const fs = require('fs');
const dns = require('dns');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log('Program start');

//Timeouts
setTimeout(() => {
  console.log('Timeout 1', timestamp());
}, 0);
setTimeout(() => {
  process.nextTick(() => info('NextTick 1'));
  console.log('Timeout 2', timestamp());
}, 100);

let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log(`Interval ${(intervalCount += 1)}`);
  if (intervalCount === 3) {
    clearInterval(intervalId);
  }
}, 50);


// I/O Events
dns.lookup('localhost', (err, address, family) => {
  console.log('DNS 1 localhost', address, timestamp());
  Promise.resolve().then(() => console.log('Promise 2', timestamp()));
  process.nextTick(() => console.log('Next Tick 3', timestamp()));
});

console.log('Program end');
