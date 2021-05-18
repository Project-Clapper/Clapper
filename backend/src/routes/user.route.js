import express from 'express';
import { userCommunities, updateUser, userPost } from '../controllers/user.controller';

const router = express.Router();

router.get('/post', userPost);
router.get('/communities', userCommunities);
router.post('/update', updateUser);

export default router;
