/**
 * Dependencias
 */

var http = require('http'); //o import http from 'http'
var dotenv = require('dotenv').config({ quiet: true }); // npm install dotenv y quite true para quitar --> [dotenv@17.2.3] injecting env (1) from .env -- tip: ⚙️  suppress all logs with { quiet: true }
var debug = require('debug')('practicando:server'); // añadir mensajes de depuración
var app = require('../app'); // Diseño de la Web

/**
 * Crear servidor HTTP
 */

var server = http.createServer(app);
var port = normalizePort(process.env.PORT || '3000'); // process.env.PORT == dotenv.parsed.PORT

server.listen(port); // Para abrirlo
server.on('error', onError); // PARA MOSTRAR EL ERROR
server.on('listening', onListening); // PARA VER QUE ESCUCHA

// '3000' -> 3000
function normalizePort(val){ 
    var port = parseInt(val,10); // Normaliza el valor a un número entero
    if(isNaN(port)){
        return val; //Si port no es un número
    }
    if (port >= 0) { //Si el puerto es válido
        return port;
    }
    return false; //Si no cumple con las condiciones anteriores devuelve false
}

function onError(error) {
    console.log(`Ha ocurrido un error al lanzar el serviodor: ${error}`);
}

function onListening(){
    port = server.address().port;
    // Siempre registrar en consola para que el usuario vea el puerto
    console.log(`El servidor ha arrancado en el puerto ${port} en http://localhost:${port}`);
    debug(`El servidor ha arrancado en el puerto ${port} en http://localhost:${port}`);
}