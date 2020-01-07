const EventEmitter = require('events'); // import EVENT MODULE
const uuid = require('uuid'); // import uuid

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

// Create event listener (listen on 'message' and do something))
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World!');
logger.log('Hello');
logger.log('World!');
