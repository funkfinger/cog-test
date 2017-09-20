var express = require('express');
var router = express.Router();

/* GET handle login page. */
router.get('/', function(req, res, next) {
  res.render('handle_login', {
    title: 'Handle Login',
    authCode: req.query.code
  });
});

module.exports = router;
