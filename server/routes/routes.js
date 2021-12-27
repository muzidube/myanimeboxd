"use strict";
const express1 = require('express');
const axios = require('axios');
const qs = require('qs');
const router = express1.Router();
require('dotenv').config();
router.get('/anime/top-airing', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/top-upcoming', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=upcoming&limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/top-all', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/winter', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2017/winter?limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/spring', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2017/spring?limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/summer', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2017/summer?limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/fall', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2017/fall?limit=10'",
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/single/:animeID', (request, response) => {
    const id = request.params.animeID;
    const config = {
        method: 'get',
        url: `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,synopsis,mean,rank,num_episodes,start_season,related_anime,related_manga,recommendations,studios,statistics`,
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((popularResponse) => {
        response.json(JSON.stringify(popularResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/search/:searchQuery', (request, response) => {
    const query = request.params.searchQuery;
    const config = {
        method: 'get',
        url: `https://api.myanimelist.net/v2/anime?q=${query}&fields=id,title,main_picture,synopsis,rank,num_episodes,start_season,studios`,
        headers: {
            'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID
        }
    };
    axios(config)
        .then((searchResponse) => {
        response.json(JSON.stringify(searchResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/movieAPI/bg', (request, response) => {
    const config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/list/8169193?&api_key=${process.env.TMDB_API}&language=en-US`,
        headers: {}
    };
    axios(config)
        .then((queryResponse) => {
        response.json(JSON.stringify(queryResponse.data.items));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/anime/:code/:verifier', (request, response) => {
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
            Cookie: 'MALHLOGSESSID=870226fa50510c0408b4d7f6ef6b185f; MALSESSIONID=jo7f9j3mceap8m4i5hh2tcqrn3'
        },
        data
    };
    axios(config)
        .then((checkResponse) => {
        console.log(JSON.stringify(checkResponse.data));
        response.json(JSON.stringify(checkResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
module.exports = router;
//# sourceMappingURL=routes.js.map