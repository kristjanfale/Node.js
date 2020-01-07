const Logger = require('./logger'); // Import file

const logger = new Logger();

// Create event listener (listen on 'message' and do something))
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World!');
logger.log('Hello');
logger.log('World!');
