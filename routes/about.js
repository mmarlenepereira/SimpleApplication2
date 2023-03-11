const express = require('express');
const router = express.Router();

/* GET About page. */
router.get('/', function(req, res) {
  res.render('about', { title: 'About Us' });
});

module.exports = router;
