const express1 = require('express');
require('dotenv').config();
const axios = require('axios');

const router = express1.Router();
router.get('/movieAPI/popular', (request, response) => {
  const config = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };
  axios(config)
    .then((popularResponse) => {
      console.log(JSON.stringify(popularResponse.data));
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
