const disparaEvento = () => {
    const event = logger.emit("logMessage");
    console.log(event);
    logger.logIt('logMessage', {name: 'John', age: 40});
};

module.exports = {
    disparaEvento
};

disparaEvento();
