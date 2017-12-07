const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');

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

router.get('/upcoming', function(req, res, next) {
    const { baseUrl, apiKey, upcomingTitles } = config.tmdb;
    request(baseUrl + upcomingTitles, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
              console.log(body);
              res.send(body);
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
    const { baseUrl, apiKey, posterUrl, imageSizes } = config.tmdb;
    const posterSizes = imageSizes.posterSizes;
    request(`${baseUrl}movie/${id}` , {
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

router.get('/credits/:id', function(req, res, next) {
    const id = req.params.id;
    const { baseUrl, apiKey } = config.tmdb;

    request(`${baseUrl}movie/${id}/credits`, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                ret.cast = ret.cast;
                ret.crew = ret.crew.slice(0, 5);
                res.send(ret);
            } else {
                res.json(error);
            }
        }
    )
});

function getMovieDetailsFromApi(id) {

}

module.exports = router;
