/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();

//home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Authentication' });
});

module.exports = router;
