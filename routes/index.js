var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSS Zen Garden: The Beauty of CSS Design' });
});

module.exports = router;
