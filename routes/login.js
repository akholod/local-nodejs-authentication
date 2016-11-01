/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { /*message: req.flash('loginMessage')*/});
});

module.exports = router;
