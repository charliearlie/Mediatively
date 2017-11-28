const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');

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
                });
                res.send(ret.results);
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
                console.log(ret);
                res.send(ret);
            } else {
                res.json(error);
            }
        }
    );
});

module.exports = router;
