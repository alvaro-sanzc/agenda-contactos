// Dependencias
const createError = require('http-errors'); // Para mostrar errores
const express = require('express'); //Ayuda para GET, POST, etc. Peticiones HTTP
const path = require('path');
const session = require('express-session'); // Para almanecar los datos de la sesión

// Configuración de la web
const app = express();
app.set('views', path.join(__dirname, 'views')); // Las vistas están en views
app.set('view engine', 'ejs'); // Las vistas tienen el formato ejs
app.use(express.static(path.join(__dirname, 'public'))); // Formato de las vistas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configura el middleware de sesión -- de express-session
app.use(
  session({
    secret: 'mi_clave_segura', 
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Web pero con rutas
app.locals.title = "Agenda de Contactos"

const login = require('./routes/login');
app.use('/login', login);

const registrarse = require('./routes/registrarse');
app.use('/registrarse', registrarse);

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const contactos = require('./routes/contactos');
app.use('/contactos', contactos);

const annadir_contactos = require('./routes/annadir_contacto')
app.use('/annadir_contacto', annadir_contactos)


// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
});

module.exports = app;