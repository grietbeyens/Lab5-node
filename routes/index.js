var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'welcom to my site' });
  res.render('index', { title: 'Today\'s messages!'});
});

module.exports = router;
