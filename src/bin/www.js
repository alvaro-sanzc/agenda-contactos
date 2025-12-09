/**
 * Dependencias
 */

var http = require('http'); //o import http from 'http'
var dotenv = require('dotenv').config({ quiet: true }); // npm install dotenv y quite true para quitar --> [dotenv@17.2.3] injecting env (1) from .env -- tip: ⚙️  suppress all logs with { quiet: true }
var debug = require('debug')('practicando:server'); // añadir mensajes de depuración
var app = require('../../app'); // Diseño de la Web


// Puerto
var port = normalizePort(process.env.PORT || '3000'); // process.env.PORT == dotenv.parsed.PORT
app.set('port', port);

/**
 * Crear servidor HTTP
 */

var server = http.createServer(app);


/**
 *  Socket.io
 */

var { Server } = require('socket.io');
var io = new Server(server);

// Eventos de Socket.io
io.on('connection', function (socket) {
    // console.log('Nuevo usuario conectado');

    // Recibir mensaje del cliente
    socket.on('chatMessage', function (msg) {
        // Reenviar el mensaje a todos los clientes conectados
        io.emit('chatMessage', msg);
    });

  socket.on('disconnect', function () {
    // console.log('Usuario desconectado');
  });
});

/**
 * Poner servidor a escuchar
 */

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
    // (`Ha ocurrido un error al lanzar el serviodor: ${error}`);
}

function onListening(){
    port = server.address().port;
    // Siempre registrar en consola para que el usuario vea el puerto
    // console.log(`El servidor ha arrancado en el puerto ${port} en http://localhost:${port}`);
    debug(`El servidor ha arrancado en el puerto ${port} en http://localhost:${port}`);
}