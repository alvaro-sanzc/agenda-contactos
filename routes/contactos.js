const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET home page. */
router.get('/', function(req, res) {
  //console.log(contacts.data)
  res.render('contactos', {ejs_contacts: contacts.data, nuevo_contacto: {}});
});

router.post('/',function(req,res,next){
  // console.log(req.body) -> Datos del formulario
  contacts.data.push(req.body);
  res.render('contactos', {ejs_contacts: contacts.data, nuevo_contacto: req.body});
});

module.exports = router;