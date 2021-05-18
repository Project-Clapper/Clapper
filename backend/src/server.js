import cors from 'cors';
import express from 'express';
import { urlencoded, json } from 'body-parser';
import authRouter from './routes/auth.route';
import imageRouter from './routes/image.route';
import communityRouter from './routes/commnity.route';
import postRouter from './routes/post.route';
import userRouter from './routes/user.route';

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/auth', authRouter);
app.use('/image', imageRouter);
app.use('/community', communityRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
