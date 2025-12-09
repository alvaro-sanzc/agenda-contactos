const express = require('express');
const router = express.Router();
const database = require('../database/models/contact.model');

router.get('/', function(req,res) {
    res.render('registrarse', {mensaje: null});
});

router.post('/', function(req,res) {
    const {username, user_password} = req.body
    const register = database.register(username,user_password);
    if(register == true){
        // console.log("Se ha creado el usuario ", username)
        req.session.user = { username }; // Añado username a req.session
        res.redirect('/');
    } else {
        mensaje = register;
       res.render('registrarse', {mensaje}); 
    }
});


module.exports = router;