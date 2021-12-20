const express1 = require('express');
require('dotenv').config();
const axios = require('axios');

const router = express1.Router();

router.get('/anime/top-airing', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/top-upcoming', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=upcoming&limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/top-all', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/winter', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2017/winter?limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/spring', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2017/spring?limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/summer', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2017/summer?limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/fall', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2017/fall?limit=10'",
    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/single/:animeID', (request: any, response: any) => {
  const id = request.params.animeID;
  const config: {} = {
    method: 'get',
    url: `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,synopsis,mean,rank,num_episodes,start_season,related_anime,related_manga,recommendations,studios,statistics`,

    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((popularResponse: any) => {
      response.json(JSON.stringify(popularResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/anime/search/:searchQuery', (request: any, response: any) => {
  const query = request.params.searchQuery;
  const config: {} = {
    method: 'get',
    url: `https://api.myanimelist.net/v2/anime?q=${query}&fields=id,title,main_picture,synopsis,rank,num_episodes,start_season,studios`,

    headers: {
      'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
    }
  };

  axios(config)
    .then((searchResponse: any) => {
      response.json(JSON.stringify(searchResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/movieAPI/bg', (request: any, response: any) => {
  const config = {
    method: 'get',
    url: `https://api.themoviedb.org/3/list/8169193?&api_key=${process.env.TMDB_API}&language=en-US`,
    headers: {}
  };

  axios(config)
    .then((queryResponse: any) => {
      response.json(JSON.stringify(queryResponse.data.items));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

module.exports = router;
