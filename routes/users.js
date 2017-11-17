const express = require('express');
const router = express.Router();

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
  	username: "penus"
  }]);
});

module.exports = router;
