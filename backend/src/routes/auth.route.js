import express from 'express';
import { signUp, signIn } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/me');

export default router;
