var express = require('express');
var router = express.Router();
router.get('/version', function(req, res, next) {

res.send("v0.1.0")
});

module.exports = router;
