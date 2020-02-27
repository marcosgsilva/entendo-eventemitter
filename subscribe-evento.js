const Logger = require('./EventEmmiter');

global.logger = new Logger();


logger.on('logMessage',() => {
    console.log("Listened value => ");
});
