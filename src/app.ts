import 'dotenv/config';
import express, { Request, Response, NextFunction, Errback } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import indexRouter from './routes/index';
import logger from './utils/logger';

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/v1/', indexRouter);

app.use((error: Errback, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        logger.fatal(`Error from express error handler, error is: ${error}`);
        res.redirect('/v1/');
    } else {
        next();
    }
});

export default app;
