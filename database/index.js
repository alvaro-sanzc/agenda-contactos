const database = {};

database.contacts = require('./models/contacts.model');

function initialUsers(){
    const users = ["Antonio", "María","Ana","admin"];
    users.forEach(u=> {
        if(u == "admin"){
            database.contacts.register(u,"admin");
        } else {
            database.contacts.register(u,"1234");
        }
    })
}

function initialContacts() {
    const data = [
        { nombre: "Paco", edad: 28, telefono: "123456789", correo: "paco@gmail.com", birthday: new Date("1997-06-15T00:00:00Z")  },
        { nombre: "Ana", edad: 35, telefono: "987654321", correo: "ana@yahoo.es", birthday: new Date("1990-02-10T00:00:00Z")  },
        { nombre: "Luís", edad: 25, telefono: "555555555", correo: "luis@usp.ceu.es", birthday: new Date("2000-06-15T00:00:00Z")}
    ];
    data.forEach(c => database.contacts.addData(c));
    return data;
}

function initializeDB() {
    initialContacts();
    initialUsers();
}

initializeDB();

module.exports = database;
