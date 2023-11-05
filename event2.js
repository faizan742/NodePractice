const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}


const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (data) => {
  console.log(`Custom event received in event2.js: ${data}`);
});
module.exports = myEmitter;

//myEmitter.emit('customEvent', 'Hello from event2.js');
