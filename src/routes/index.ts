import express from 'express';
import userRoutes from './userRoutes';
import pingRouter from './pingRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/', pingRouter)

export default router;
