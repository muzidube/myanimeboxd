const express1 = require('express');
const axios = require('axios');
const qs = require('qs');

const router = express1.Router();

require('dotenv').config();

router.get('/top-airing', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=100'",
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

router.get('/top-upcoming', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=upcoming&limit=100'",
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

router.get('/most-popular', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=100',
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

router.get('/top-all', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=100'",
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

router.get('/winter', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2021/winter?&limit=100'",
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

router.get('/spring', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2021/spring?&limit=100'",
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

router.get('/summer', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2021/summer?&limit=100'",
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

router.get('/fall', (request: any, response: any) => {
  const config: {} = {
    method: 'get',
    url: "https://api.myanimelist.net/v2/anime/season/2021/fall?&limit=100'",
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

router.get('/single/:animeID', (request: any, response: any) => {
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

router.get('/search/:searchQuery', (request: any, response: any) => {
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

router.get('/user/:code/:verifier', (request: any, response: any) => {
  const { code } = request.params;
  const { verifier } = request.params;
  const data = qs.stringify({
    client_id: process.env.X_MAL_CLIENT_ID,
    client_secret: process.env.X_MAL_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    code_verifier: verifier
  });

  const config = {
    method: 'post',
    url: 'https://myanimelist.net/v1/oauth2/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie:
        'MALHLOGSESSID=870226fa50510c0408b4d7f6ef6b185f; MALSESSIONID=jo7f9j3mceap8m4i5hh2tcqrn3'
    },
    data
  };

  const fetchUserDetails = async () => {
    try {
      const checkResponse = await axios(config);
      const accessToken = JSON.stringify(checkResponse.data.access_token);
      const refreshToken = JSON.stringify(checkResponse.data.refresh_token);

      const tokenConfig = {
        method: 'get',
        url: 'https://api.myanimelist.net/v2/users/@me?fields=anime_statistics',
        headers: {
          Authorization: `Bearer ${accessToken.replace(/^"|"$/g, '')}`
        }
      };

      const userResponse = await axios(tokenConfig);
      const userId = JSON.stringify(userResponse.data.id);
      const username = JSON.stringify(userResponse.data.name);
      const user = {
        id: parseInt(userId, 10),
        username: username.replace(/^"|"$/g, ''),
        access_token: accessToken.replace(/^"|"$/g, ''),
        refresh_token: refreshToken.replace(/^"|"$/g, '')
      };

      return response.json(user);
    } catch (error) {
      // console.log('error: ', error);
    }
  };

  fetchUserDetails();
});

router.get('/user/:token', (request: any, response: any) => {
  const { token } = request.params;
  const config = {
    method: 'get',
    url: 'https://api.myanimelist.net/v2/users/@me?fields=anime_statistics',
    headers: {
      client_id: process.env.X_MAL_CLIENT_ID,
      Authorization: `Bearer ${token}`
    }
  };

  axios(config)
    .then((userResponse: any) => {
      response.json(JSON.stringify(userResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/suggested/:token', (request: any, response: any) => {
  const { token } = request.params;
  const config = {
    method: 'get',
    url: 'https://api.myanimelist.net/v2/anime/suggestions?&limit=100',
    headers: {
      client_id: process.env.X_MAL_CLIENT_ID,
      Authorization: `Bearer ${token}`
    }
  };

  axios(config)
    .then((suggestedResponse: any) => {
      response.json(JSON.stringify(suggestedResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/list/:token/:type', (request: any, response: any) => {
  const { token } = request.params;
  const { type } = request.params;
  const config = {
    method: 'get',
    url: `https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=500&status=${type}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  axios(config)
    .then((listResponse: any) => {
      response.json(JSON.stringify(listResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get('/check-lists/:token', (request: any, response: any) => {
  const { token } = request.params;
  const config = {
    method: 'get',
    url: 'https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=500',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  axios(config)
    .then((checkListsResponse: any) => {
      response.json(JSON.stringify(checkListsResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

router.get(
  '/user-anime/:animeID/:token/:status/:score/:episodes',
  (request: any, response: any) => {
    const id = request.params.animeID;
    const { token } = request.params;
    const { status } = request.params;
    const { score } = request.params;
    const { episodes } = request.params;
    const data = qs.stringify({
      status,
      score,
      num_watched_episodes: episodes
    });
    const config = {
      method: 'put',
      url: `https://api.myanimelist.net/v2/anime/${id}/my_list_status?`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    };

    axios(config)
      .then((submitResponse: any) => {
        response.json(JSON.stringify(submitResponse.data));
      })
      .catch((error: Error) => {
        console.log(error);
        response.json(JSON.parse('Error updating list.'));
      });
  }
);
router.get('/user-anime/delete/:animeID/:token', (request: any, response: any) => {
  const id = request.params.animeID;
  const { token } = request.params;
  const config = {
    method: 'delete',
    url: `https://api.myanimelist.net/v2/anime/${id}/my_list_status`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  axios(config)
    .then((deleteResponse: any) => {
      response.json(JSON.stringify(deleteResponse.data));
    })
    .catch((error: Error) => {
      console.log(error);
      response.json(JSON.parse('Error updating list.'));
    });
});

module.exports = router;
