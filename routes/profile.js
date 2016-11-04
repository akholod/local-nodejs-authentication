/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('userProfile', {
        user : req.user // get the user out of session and pass to template
    });
});


module.exports = router;