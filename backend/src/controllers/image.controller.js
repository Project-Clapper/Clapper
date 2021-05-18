import { bucketName, s3Client } from '../config/s3.config';
import multer from 'multer';
import multerS3 from 'multer-s3';

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, `${Date.now()}-${Math.floor(Math.random() * 1000000)}-${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Only image files are allowed!';
      return cb(null, false);
    }
    cb(null, true);
  },
});

const handleUpload = async (req, res) => {
  try {
    if (req.fileValidationError) res.status(400).send({ error: req.fileValidationError });
    else res.status(200).json({ name: req.file.key, location: req.file.location });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { upload, handleUpload };
