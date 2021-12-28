"use strict";
const express1 = require('express');
const axios = require('axios');
const qs = require('qs');
const router = express1.Router();
require('dotenv').config();
router.get('/top-airing', (request, response) => {
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
router.get('/top-upcoming', (request, response) => {
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
router.get('/most-popular', (request, response) => {
    const config = {
        method: 'get',
        url: 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=6',
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
router.get('/top-all', (request, response) => {
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
router.get('/winter', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2021/winter?limit=10'",
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
router.get('/spring', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2021/spring?limit=10'",
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
router.get('/summer', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2021/summer?limit=10'",
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
router.get('/fall', (request, response) => {
    const config = {
        method: 'get',
        url: "https://api.myanimelist.net/v2/anime/season/2021/fall?limit=10'",
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
router.get('/single/:animeID', (request, response) => {
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
router.get('/search/:searchQuery', (request, response) => {
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
router.get('/user/:code/:verifier', (request, response) => {
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
        }
        catch (error) {
            // console.log('error: ', error);
        }
    };
    fetchUserDetails();
});
router.get('/suggested/:token', (request, response) => {
    const { token } = request.params;
    const config = {
        method: 'get',
        url: 'https://api.myanimelist.net/v2/anime/suggestions?limit=6',
        headers: {
            client_id: process.env.X_MAL_CLIENT_ID,
            Authorization: `Bearer ${token}`
        }
    };
    axios(config)
        .then((suggestedResponse) => {
        response.json(JSON.stringify(suggestedResponse.data));
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/majig/thing', (request, response) => {
    const testParameter = request.params.thing;
    response.json(`This test will work ${testParameter}`);
});
module.exports = router;
//# sourceMappingURL=routes.js.map