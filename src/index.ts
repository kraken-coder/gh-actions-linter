import express, { Application } from 'express';

const app: Application = express();

const j = 'hell';

app.use('/', (req, res) => {
  res.send('Hello welcome');
});

app.listen(5000, () => console.log('server up and running'));
