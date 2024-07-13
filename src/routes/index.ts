import express, { Response, Request } from 'express';
const router = express.Router();

router.get('/healthcheck', (req: Request, res: Response) => {
    res.send('Hello from mockingo backend, I am alive..!!');
});

router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to mockingo..!!');
});

export default router;
