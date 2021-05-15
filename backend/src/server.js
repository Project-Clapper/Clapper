import cors from 'cors';
import express from 'express';
import { urlencoded, json } from 'body-parser';
import authRouter from './routes/auth.route';

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

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
