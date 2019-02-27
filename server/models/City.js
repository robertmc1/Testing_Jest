const appRoot = require('app-root-path');
const winston = require('winston');

const options = {
    fileInfo: {
        level: 'info',
        filename: `${appRoot}/server/logs/log-info.log`,
        handleExceptions: true,
        format: winston.format.json(),
        maxsize: 10485760, // 10 MB
        maxFiles: 5,
    },
    fileWarn: {
        level: 'warn',
        filename: `${appRoot}/server/logs/log-warn.log`,
        handleExceptions: true,
        format: winston.format.json(),
        maxsize: 10485760, // 10 MB
        maxFiles: 5,
    },
    console: {
        level: 'silly',
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }
};

var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.fileInfo), // Info includes HTTP requests
        new winston.transports.File(options.fileWarn), // Without HTTP logs
        new winston.transports.Console(options.console)
    ],
    exitOnError: false,
});

logger.stream = {
    write: function (message) {
        logger.info(message);
    }
};

module.exports = logger;