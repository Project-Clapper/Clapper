import express from 'express';
import { userCommunities, updateUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/communities', userCommunities);
router.post('/update', updateUser);

export default router;
