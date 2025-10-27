const express = require('express');
const router = express.Router();
const database = require('../database/models/contact.model')

router.get('/', function(req,res ) {
  res.render('login', {mensaje: null});
});

router.post('/', (req, res) => {
const { username, user_password } = req.body;
  const login = database.login(username, user_password);
  if (login == true) {
    req.session.user = { username }; // Añado username a req.session
    res.redirect('/');
  } else {
    mensaje = login;
    res.render('login', {mensaje});
  }
});

module.exports = router;