import express from 'express';
import { upload, handleUpload } from '../controllers/image.controller';

const router = express.Router();

router.post('/uploadImage', upload.single('image'), handleUpload);

export default router;
