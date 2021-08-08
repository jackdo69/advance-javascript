import express from 'express';
import userRouter from './users';

const router = express.Router();

/* GET home page. */
router.use('/user', userRouter);

export default router;
