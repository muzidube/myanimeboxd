"use strict";
const express1 = require('express');
require('dotenv').config();
const axios = require('axios');
const router = express1.Router();
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
        console.log(JSON.stringify(popularResponse.data));
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
        console.log(JSON.stringify(popularResponse.data));
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
        url: `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
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
module.exports = router;
//# sourceMappingURL=anime.js.map