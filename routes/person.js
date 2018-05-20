const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');
const cors = require('cors');

router.use(cors());
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
                ret.profile_path = "https://image.tmdb.org/t/p/w185" + ret.profile_path;
                res.json(ret);
            } else {
                res.json(error);
            }
        }
    )
});

module.exports = router;