import express from 'express';
import {
  createCommunity,
  findCommunityByName,
  getCommunities,
  joinCommunity,
} from '../controllers/comunity.controller';

const router = express.Router();

router.post('/create', createCommunity);
router.get('/find', findCommunityByName);
router.get('/join', joinCommunity);
router.get('/get', getCommunities);

export default router;
