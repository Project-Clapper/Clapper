import express from 'express';
import { signUp, signIn, me } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/me', me);

export default router;
