const express = require('express');
const router = express.Router();
const database = require('../database/models/contacts.model')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.post('/', function(req, res, next){
  const isLoginRight = database.login(req.body.user_username, req.body.user_password);
  if(isLoginRight == true){
    res.render('index');
  } else {
    res.render('login')
  }
})

module.exports = router;