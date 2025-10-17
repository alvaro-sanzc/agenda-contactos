const database = {};

database.contact = require('./models/contacts.model');

function initialContacts() {
    const data = [
        { nombre: "Paco", edad: 32, telefono: "123456789", correo: "paco@gmail.com", birthday: 'ISODate("1993-06-15T00:00:00Z")'  },
        { nombre: "Ana", edad: 28, telefono: "987654321", correo: "ana@yahoo.es", birthday: 'ISODate("1997-02-10T00:00:00Z")'  },
        { nombre: "Luís", edad: 40, telefono: "555555555", correo: "luis@usp.ceu.es", birthday: 'ISODate("1985-11-25T00:00:00Z")' }
    ];
    data.forEach(c => database.contact.addData(c));
    return data;
}

function initializeDB() {
    initialContacts();
}

initializeDB();

module.exports = database;
