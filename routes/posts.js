var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var post = { id: 123, title : "title 1", content : "post conent ..."};
  res.send(JSON.stringify(post));
});

module.exports = router;
