const express = require('express');
const router = express.Router();
const database = require('../database/models/contact.model')

router.get('/', function(req,res ) {
    res.render('login');
});

router.post('/', (req, res) => {
  const { user_username, user_password } = req.body;
  if (database.login(user_username,user_password)) {
    req.session.user = { user_username }; // Añado username a req.session
    res.redirect('/');
  } else {
    res.send('Credenciales incorrectas');
  }
});

module.exports = router;