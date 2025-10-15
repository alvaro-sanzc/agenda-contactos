const express = require('express');
const router = express.Router();
const database = require('../database')

/* GET home page. */
router.get('/', function(req, res) {
  console.log(contacts.data)
  res.render('contactos', {ejs_contacts: contacts.data});
});

module.exports = router;