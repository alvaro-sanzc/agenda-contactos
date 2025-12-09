const database = {};

database.contacts = require('./models/contact.model');

function initialLoginUsers(){
    const USERS = ["Antonio", "María","Ana","admin"];
    USERS.forEach(u=> {
        if(u == "admin"){
            database.contacts.register(u,"admin");
        } else {
            database.contacts.register(u,"1234");
        }
    });
}

function initialContacts() {
    const DATA = [
        { nombre: "Paco", edad: 28, telefono: "123456789", correo: "paco@gmail.com", birthday: new Date("1997-06-15T00:00:00Z")  },
        { nombre: "Ana", edad: 35, telefono: "987654321", correo: "ana@yahoo.es", birthday: new Date("1990-02-10T00:00:00Z") },
        { nombre: "Luís", edad: 25, telefono: "555555555", correo: "luis@usp.ceu.es", birthday: new Date("2000-06-15T00:00:00Z")}
    ];
    DATA.forEach(c => database.contacts.addContacts(c));
}

function initializeDB() {
    initialLoginUsers(),
    initialContacts();
}

initializeDB();

module.exports = database;
