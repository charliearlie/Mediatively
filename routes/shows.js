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
    const { baseUrl, apiKey, tvPopular } = config.tmdb;
    request(baseUrl + tvPopular, {
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

module.exports = router;
