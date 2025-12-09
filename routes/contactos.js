const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', function(req, res) {
  const data_object = database.contacts.data; // Es un objeto
  const data_array = Object.values(data_object); // Es una aray
  res.render('contactos', {data_array, nuevo_contacto: {}, contactoEditar : null});
});

router.get("/editar/:nombre", (req, res) => {
  // Obtener los datos del contacto y mostrarlos por defecto
  const nombre = req.params.nombre;
  const contacto = database.contacts.data[nombre];

  const data_object = database.contacts.data; // Es un objeto
  const data_array = Object.values(data_object); // Es una aray
  res.render('contactos', {data_array , nuevo_contacto: {}, contactoEditar : contacto});
});


router.post('/', function(req, res) { //POST DE editar contacto
  const nuevos_datos = req.body; // Los datos obtenidos del formulario

  // Para obtener el contacto seleccionado a editar y elimnarlo
  const referer = req.headers.referer;
  const match = referer.match(/\/editar\/([^/?#]+)/);
  let contacto_editar = match ? match[1] : null;
  if (contacto_editar) {
    contacto_editar = decodeURIComponent(contacto_editar);
  };
  // console.log(contacto_editar);
  database.contacts.deleteContacts(contacto_editar);

  // Añadir el contacto
  database.contacts.addContacts(nuevos_datos);

  // Cargar los contactos
  const data_object = database.contacts.data; // Es un objeto
  const data_array = Object.values(data_object); // Es una aray
  res.render('contactos', {data_array, nuevo_contacto: {}, contactoEditar : null});
});

router.post('/annadir',function(req,res,next){
  const data_new_contact = req.body; // Datos del formulario
  database.contacts.addContacts(data_new_contact); // La f() correspondiente

  const data_array = Object.values(database.contacts.data); // Todos los contactos
  res.render('contactos', {data_array, contactoEditar : null});
});

router.post('/eliminar/:nombre', function (req,res) {
  const nombre_eliminar = req.params.nombre;
  database.contacts.deleteContacts(nombre_eliminar);
  
  const data_array = Object.values(database.contacts.data); // Todos los contactos
  res.render('contactos', {data_array,  contactoEditar : null});
});

module.exports = router;