const appRoot = require('app-root-path');
const winston = require('winston');

const option = {
    fileWarn: {
        level: 'warn',
        filename: `${appRoot}/logs/server-warn.log`,
        handleExceptions: true,
        maxSize: 5242880, //5 mb
        maxFiles: 5,
        format: winston.format.json()
    },
    fileInfo: {
        level: 'info',
        filename: `${appRoot}/logs/server-info.log`,
        handleExceptions: true,
        maxSize: 10485760, //10 mb
        maxFiles: 5,
        format: winston.format.json()
    },
    console: {
        level: 'silly',
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.simple(),
            winston.format.colorize()
        )
    }
};

const logger = winston.createLogger({
   transports: [
       new winston.transports.Console(option.console),
       new winston.transports.File(option.fileInfo),
       new winston.transports.File(option.fileWarn),
   ],
    exitOnError: false
});

logger.stream = {
    write: function (message) {
        logger.info(message);
    }
};

module.exports = logger;