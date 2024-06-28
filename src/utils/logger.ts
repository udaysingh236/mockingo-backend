import pino from 'pino';
const logger = pino({
    level: process.env.PINO_LEVEL,
});

export default logger;
