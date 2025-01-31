import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();
const firstListener = () => console.log('First event listener');
const secondListener = () => console.log('Second event listener');

myEmitter.on('myEvent', firstListener);
myEmitter.on('myEvent', secondListener);
myEmitter.on('other Event', () => console.log('Other Event'))

console.log(myEmitter.eventNames())


setTimeout(() => myEmitter.emit('myEvent'), 1000);

setTimeout(() => myEmitter.off('myEvent', secondListener), 2000)

setTimeout(() => myEmitter.emit('myEvent'), 3000);

