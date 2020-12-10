var express = require('express');
var router = express.Router();
router.get('/appVersion', function(req, res, next) {

res.send({"version":"0.1.0"})
});

module.exports = router;
