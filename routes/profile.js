/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();

router.get('/', isLoggedIn, function(req, res) {
    res.render('userProfile', {
        user : req.user // get the user out of session and pass to template
    });
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;