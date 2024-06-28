import app from './app';
import logger from './utils/logger';

const port = process.env.PORT!;

function startServer(port: string) {
    try {
        const serverPort = parseInt(port);
        app.listen(serverPort, () => {
            logger.info(`From local - Server started sucessfully on port ${serverPort}`);
        });
    } catch (err) {
        logger.fatal(`Not able to start server, error is ${err}`);
        process.exit(1);
    }
}

startServer(port);
