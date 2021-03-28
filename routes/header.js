var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"ipaddress": req.ip, "language": req.headers['accept-language'], "software": req.headers['user-agent']});
});

module.exports = router;
