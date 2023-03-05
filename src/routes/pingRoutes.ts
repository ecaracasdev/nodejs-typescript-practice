import { Router } from 'express';
import pingController from '../controllers/ping/ping';

const router = Router();

router.get('/', pingController);

export default router;
