import express from 'express';
import { urlencoded, json } from 'body-parser';
import authRouter from './routes/auth.route';

const app = express();
const port = process.env.PORT;

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
