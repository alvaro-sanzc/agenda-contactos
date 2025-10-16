// Dependencias
const createError = require('http-errors'); // Para mostrar errores
const express = require('express');
const path = require('path');

// Configuración de la web
const app = express();
app.set('views', path.join(__dirname, 'views')); // Las vistas están en views
app.set('view engine', 'ejs'); // Las vistas tienen el formato ejs
app.use(express.static(path.join(__dirname, 'public'))); // Formato de las vistas


// Web pero con rutas
app.locals.title = "Agenda de Contactos"

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

var contactos = require('./routes/contactos');
app.use('/contactos', contactos);

var annadir_contactos = require('./routes/annadir_contacto')
app.use('/annadir_contacto', annadir_contactos)
// Web pero sin rutas

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
});

module.exports = app;