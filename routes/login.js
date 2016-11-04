/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));


router.get('/', function(req, res, next) {
  res.render('login', { message: req.flash('loginMessage')});
});

module.exports = router;
