const EventEmitter = require('events'); // import EVENT MODULE
const uuid = require('uuid'); // import uuid

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
