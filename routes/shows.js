const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');
const cors = require('cors');

router.use(cors());
/* GET shows listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	title: "test"
  }, {
  	id: 2,
  	username: "test"
  }]);
});

router.get('/popular', function(req, res, next) {
    const { baseUrl, apiKey, tvPopular, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(baseUrl + tvPopular, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                console.log(ret.results);
                ret.results.map(result => {
                    result.poster_path = `${posterUrl}${posterSizes.extraSmall}${result.poster_path}`;
                    result.title = result.name;
                    delete result.name;
                });
                res.json(ret.results);
            } else {
                res.json(error);
            }
        }
    );
});

router.get('/today', function(req, res, next) {
    const { baseUrl, apiKey, tvToday, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(baseUrl + tvToday, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                console.log(ret.results);
                ret.results.map(result => {
                    result.poster_path = `${posterUrl}${posterSizes.extraSmall}${result.poster_path}`;
                    result.title = result.name;
                    delete result.name;
                });
                res.json(ret.results);
            } else {
                res.json(error);
            }
        }
    );
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const { baseUrl, apiKey, tvPopular, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(`${baseUrl}tv/${id}` , {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                ret.poster_path = `${posterUrl}${posterSizes.large}${ret.poster_path}`
                ret.backdrop_path = `${posterUrl}original${ret.backdrop_path}`;
                console.log(ret);
                res.json(ret);
            } else {
                res.json(error);
            }
        }
    );
});

module.exports = router;
