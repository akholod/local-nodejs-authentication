/**
 * Created by andrey on 14.11.16.
 */
'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport');

//home page
router.get('/', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/callback',
    passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

module.exports = router;
