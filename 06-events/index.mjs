import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const timeOutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmitter.on('timeout', timeOutListenerFn);

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => console.log('Single evenr occured'));
//Listener function will be called only once
setTimeout(() => myEmitter.emit('singleEvent', 500));
setTimeout(() => myEmitter.emit('singleEvent', 1500));

//Remove listener
setTimeout(() => myEmitter.off('timeout', timeOutListenerFn), 3000);
setTimeout(() => myEmitter.emit('timeout', 4), 4000);
