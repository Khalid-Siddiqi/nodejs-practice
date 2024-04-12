const { TIMEOUT } = require('node:dns');
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('UPS_Finish', () => {
  console.log('Please Convert Solar to K.E.');
  setTimeout(()=> {
    console.log('Please a Gentle Reminder');}, 3000);
});
myEmitter.emit('UPS_Finish');
