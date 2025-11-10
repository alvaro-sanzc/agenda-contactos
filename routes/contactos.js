const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', function(req, res) {
  data_object = database.contacts.data; // Es un objeto
  data_array = Object.values(data_object); // Es una aray
  res.render('contactos', {data_array, nuevo_contacto: {}});
});

router.post('/',function(req,res,next){
  data_new_contact = req.body; // Datos del formulario
  database.contacts.addContacts(data_new_contact); // La f() correspondiente

  data_array = Object.values(database.contacts.data); // Todos los contactos
  res.render('contactos', {data_array});
});

router.post('/eliminar/:nombre', function (req,res) {
  nombre_eliminar = req.params.nombre;
  database.contacts.deleteContacts(nombre_eliminar);
  
  data_array = Object.values(database.contacts.data); // Todos los contactos
  res.render('contactos', {data_array});
})

module.exports = router;