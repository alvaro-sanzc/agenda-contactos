/* 
ESTE JS NO SE USA - OTRA FORMA DE VER EL HTML

ACTUALMENTE FUNCIONA - DESDE EL HEADER(http://localhost:3002/estatica/) Y DESDE  http://localhost:3002/estatica.html

En caso de querer usar .js
-- app.js
app.use(express.static(path.join(__dirname, 'public')));

const estatica = require('./routes/estatica.js');
app.use('/estatica', estatica);

--estatica.js
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/estatica.html'));
});

module.exports = router;
*/