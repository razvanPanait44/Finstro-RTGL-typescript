import winston, { format } from 'winston'

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'rtgl-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
}

export const logStream = {
    /**
     * A writable stream for winston logger.
     *
     * @param {any} message
     */
    write(message) {
        /**
         * morganLogger logs all http request in a dedicated file and on console
         */
        const morganLogger = winston.createLogger({
            format: format.combine(format.simple()),
            transports: [
                new winston.transports.File({
                    filename: 'logs/requests/all.log',
                    level: 'debug',
                    handleExceptions: true,
                }),
                new winston.transports.Console({
                    level: 'debug',
                    handleExceptions: true,
                })
            ],
        });
        morganLogger.info(message.toString());
    },
};
