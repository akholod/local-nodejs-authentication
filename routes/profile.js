/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();

//get user profile only if user logged in
router.get('/', isLoggedIn, function(req, res) {
    res.render('userProfile', {
        user : req.user // get the user out of session and pass to template
    });
});

// if they aren't redirect them to the home page
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = router;