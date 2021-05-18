import express from 'express';
import { createPost, votePost, getPostFromId, getPosts } from '../controllers/post.controller';

const router = express.Router();

router.post('/create', createPost);
router.post('/vote', votePost);
router.get('/getUserPost', getPostFromId);
router.get('/get', getPosts);

export default router;
