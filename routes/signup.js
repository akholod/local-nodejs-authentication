/**
 * Created by andrey on 31.10.16.
 */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', {});
});

module.exports = router;