import express from 'express';
import { createPost, votePost, getPostFromId } from '../controllers/post.controller';

const router = express.Router();

router.post('/create', createPost);
router.post('/vote', votePost);
router.get('/get', getPostFromId);

export default router;
