const express = require('express');
const router = express.Router();
const database = require('../database/models/contact.model');



// Para que en /chat solo se pueda usar si se ha hecho login
router.get('/', function(req, res) {
  // Si NO hay usuario en sesión a login
  if (!req.session || !req.session.user || !req.session.user.username) {
    return res.redirect('/login');
  }

  // Si hay usuario a chat
  const username = req.session.user.username;
  res.render('chat', { username });
});
module.exports = router;
