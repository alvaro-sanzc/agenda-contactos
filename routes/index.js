const express = require('express');
const router = express.Router();
const database = require('../database/models/contacts.model')


router.get('/', function(req, res) {
  if(req.session.user != undefined){
    res.render('index', {nombre_usuario_registrado: req.session.user.user_username});
  } else {
    res.render('index', {nombre_usuario_registrado: null});
  }
});

router.post('/', (req, res) => {
  const { user_username, user_password } = req.body;
  if (database.login(user_username,user_password)) {
    req.session.user = { user_username }; // ← guardas el usuario
    res.redirect('/');
  } else {
    res.send('Credenciales incorrectas');
  }
});

module.exports = router;