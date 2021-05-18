import express from 'express';
import { createPost, votePost } from '../controllers/post.controller';

const router = express.Router();

router.post('/create', createPost);
router.post('/vote', votePost);

export default router;
