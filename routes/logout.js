/**
 * Created by andrey on 04.11.16.
 */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;