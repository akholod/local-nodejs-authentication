/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', {});
    console.log('get');
});

module.exports = router;