var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Simple Application" });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: "About" });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact" });
});

module.exports = router;

