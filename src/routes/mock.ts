import express, { Request, Response } from 'express';
import { createUserMock } from '../controllers/mock.controller';
import logger from '../utils/logger';

const router = express.Router();

// /v1/mock/user-data

router.post('/user-data', async (req: Request, res: Response) => {
    if (!req.body) {
        logger.error(`Request body is not received for ${req.url}`);
        return res.status(400).send('Request body is required for this request type');
    }

    const { ip: ipAddr = 'IP_NOT_FOUND', body: userData } = req;
    const mockResult = await createUserMock(ipAddr, userData);
    if (mockResult.status === 201) {
        res.status(mockResult.status).send('API sucessfully created');
    } else {
        res.status(mockResult.status).send('Internal server error');
    }
});

export default router;
