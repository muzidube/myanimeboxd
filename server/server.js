const express = require('express');
// const cors = require('cors');
require('dotenv').config();

const popularMovies = require('./api/movies').popular;

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors({ origin: 'https://www.consoom.co.uk' }));
app.use('/api', [popularMovies]);

app.listen(port, () => {
  console.log(`Server running successfully at ${port}`);
});
