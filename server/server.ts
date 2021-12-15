const express = require('express');
require('dotenv').config();
const anime = require('./api/anime.js');

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors({ origin: 'https://www.consoom.co.uk' }));

app.use('/', anime);

app.listen(port, () => {
  console.log(`Server running successfully at ${port}`);
});
