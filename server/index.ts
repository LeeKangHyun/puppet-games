import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import Games from '~/controller/api/game';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/games', Games);
app.get('*', (req, res) => {
  res.status(200).send('Hello Puppeteer');
});

app.listen(PORT, () => {
  console.log(`서버 실행중.... ${HOST}:${PORT}`);
});
