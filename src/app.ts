import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

require('./models/db');

const app: Application = express();
const port: number = 3000;

app.use(cors());
app.use(express.json({ limit: '4.5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v0', require('./routers/Blog'));

app.listen(port, () => {
  console.log('Server connected');
});
