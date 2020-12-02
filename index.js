const express = require('express');

const app = express();

const j = 'jj';
app.use('/', (req, res) => {
  res.send('Hello welcome');
});

app.listen(5000, () => console.log('server up and running'));
