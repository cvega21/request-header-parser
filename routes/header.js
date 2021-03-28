var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  console.log(req.headers['accept-language']);
  console.log(req.headers['user-agent']);
  console.log(req.headers);
  console.log(req.ip)
  res.send({"ipaddress": req.ip, "language": req.headers['accept-language'], "software": req.headers['user-agent']});
});

module.exports = router;
