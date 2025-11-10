const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
  delete req.session.user; // Elimina user de req.session
  res.redirect('/');
});

module.exports = router;