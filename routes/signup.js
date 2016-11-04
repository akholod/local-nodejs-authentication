/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/',
    failureFlash : true
}));

router.get('/', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', {message: req.flash('signupMessage')});
    console.log('get');
});

module.exports = router;