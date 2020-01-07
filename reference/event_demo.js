// EVENT MODULE
const EventEmitter = require('events');

// Create emitter class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Create event listener (listen on 'event' and clg('Event Fired...'))
myEmitter.on('event', () => console.log('Event Fired...'));

// Init(call) event
myEmitter.emit('event');
