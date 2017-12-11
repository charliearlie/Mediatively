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
  	username: "charliearlie"
  }, {
  	id: 2,
  	username: "dave"
  }]);
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const { baseUrl, apiKey } = config.tmdb;
    const url = `${baseUrl}person/${id}`

    request(url, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let ret = JSON.parse(body);
                ret.profile_path = "https://image.tmdb.org/t/p/h632" + ret.profile_path;
                res.send(ret);
            } else {
                res.json(error);
            }
        }
    )
});

module.exports = router;