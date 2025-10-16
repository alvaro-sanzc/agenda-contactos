const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // console.log(contacts.data)
  res.render('annadir_contacto');
});

module.exports = router;