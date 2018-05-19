const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');
const cors = require('cors');
const axios = require('axios');
const { baseUrl, apiKey } = config.tmdb;

router.use(cors());
/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	title: "Dunkirk"
  }, {
  	id: 2,
  	username: "Justice League"
  }]);
});

const getMovieDetail = id => axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`).catch(error => console.log(error));

const getCredits = id => axios.get(`${baseUrl}movie/${id}/credits?api_key=${apiKey}`).catch(error => console.log(error));

const getReviews = id => axios.get(`${baseUrl}movie/${id}/reviews?api_key=${apiKey}`).catch(error => console.log(error));

const getVideos = id => axios.get(`${baseUrl}movie/${id}/videos?api_key=${apiKey}`).catch(error => console.log(error));

const getRecommended = id => axios.get(`${baseUrl}movie/${id}/recommendations?api_key=${apiKey}`).catch(error => console.log(error));

router.get('/upcoming', function(req, res, next) {
    const { baseUrl, apiKey, upcomingTitles, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(baseUrl + upcomingTitles, {
            method: "GET",
            qs: {
                api_key: apiKey,
                region: "GB", //TODO: Get user's country code
                language:"en-gb"
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                ret.results.map(result => {
                    result.poster_path = `${posterUrl}${posterSizes.large}${result.poster_path}`;
                });
                res.json(ret.results);
            } else {
              res.json(error);
            }
        }
    );
});

router.get('/popular', function(req, res, next) {
    const { baseUrl, apiKey, moviesPopular, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(baseUrl + moviesPopular, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                ret.results.map(result => {
                    result.poster_path = `${posterUrl}${posterSizes.large}${result.poster_path}`;
                });
                res.json(ret.results);
            } else {
                res.json(error);
            }
        }
    );
});


router.get('/nowplaying/:countryCode', function(req, res, next) {
    const id = req.params.countryCode;
    const { baseUrl, apiKey, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(`${baseUrl}movie/now_playing`, {
            method: "GET",
            qs: {
                api_key: apiKey,
                region: 'GB',
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                ret.results.map(result => {
                    result.poster_path = `${posterUrl}${posterSizes.large}${result.poster_path}`;
                });
                res.json(ret.results.slice(0, 6));
            } else {
                res.json(error);
            }
        }
    )
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const { posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;

    axios.all([getMovieDetail(id), getCredits(id), getReviews(id), getVideos(id), getRecommended(id)])
        .then(axios.spread((info, credits, reviews, videos, recommended) => {
            
            const movie = {
                ...info.data,
                credits: credits.data,
                reviews: reviews.data.results,
                videos: videos.data.results,
                suggestedMovies: recommended.data.results,
            };
            res.json(movie);
        })).catch(error => res.json(error) );

});


module.exports = router;
