import express from 'express';
import getUser from '../controllers/user/getUser';
import postUser from '../controllers/user/postUser';

const router = express.Router();

router.get('/', getUser);
router.post('/', postUser);

export default router;
