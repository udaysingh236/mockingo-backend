import app from './app';
import logger from './utils/logger';
import mongoose from 'mongoose';
const port = process.env.PORT!;
const mongoUri = process.env.MONGO_URI!;

async function startServer(port: string, conn: string) {
    try {
        const serverPort = parseInt(port);
        await mongoose.connect(conn);
        app.listen(serverPort, () => {
            logger.info(`From local - Server started sucessfully on port ${serverPort}`);
        });
    } catch (err) {
        logger.fatal(`Not able to start server, error is ${err}`);
        process.exit(1);
    }
}

startServer(port, mongoUri);


mongoose.connection.on('connected', () => logger.info('From Local - Mongo is connected'));
mongoose.connection.on('disconnected', () => logger.info('From Local - Mongo is disconnected'));
mongoose.connection.on('reconnected', () => logger.info('From Local - Mongo is reconnected'));
mongoose.connection.on('disconnecting', () => logger.info('From Local - Mongo is disconnecting'));
mongoose.connection.on('error', () => logger.info('From Local - Error connecting to mongo'));

// SIGINT SIGTERM SIGQUIT SIGKILL
process.on('SIGINT', async () => {
    logger.info(`From Local - User pressed ctrl + c, executing the clean up routine`)
    await mongoose.disconnect()
    process.exit(0);
})
process.on('SIGQUIT', async () => {
    logger.info(`From Local - SIGQUIT has emitted, executing the clean up routine`)
    await mongoose.disconnect()
    process.exit(0);
})
process.on('SIGTERM', async () => {
    logger.info(`From Local - SIGTERM has emitted, executing the clean up routine`)
    await mongoose.disconnect()
    process.exit(0);
})

