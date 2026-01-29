const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  if(req.session.user != undefined){
    username_register = req.session.user.username;
    res.render('index', {username_register});
  } else {
    username_register = null;
    res.render('index', {username_register});
  }
});


module.exports = router;