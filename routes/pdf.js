var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.download('./public/pdf/resume.pdf', 'resume.pdf');
});

module.exports = router;