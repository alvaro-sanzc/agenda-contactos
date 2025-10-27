const contacts = {};

contacts.data = {};

contacts.loginUsers = {};

contacts.login = function(username, password){
    if(password == contacts.loginUsers[username].password){
        return true;
    }
}

contacts.register = function(username, password){
    if(contacts.data.hasOwnProperty(username)){
        throw new Error(`Ya existe el usuario ${username}.`);
    } else {
        contacts.loginUsers[username] = {username, password};
    }
}

contacts.addContacts = function(info) {
    const usuario = info.nombre || info.user_name;
    
    contacts.data[usuario] = {
        nombre: info.nombre || info.user_name,
        edad: info.edad || info.user_age,
        telefono: info.telefono || info.user_phone,
        correo: info.correo || info.user_email,
        birthday: info.birthday || info.user_birthday
    };
};

module.exports = contacts;