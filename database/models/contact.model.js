const contacts = {};

contacts.data = {};

contacts.loginUsers = {};

contacts.login = function(username, password){
    if (contacts.loginUsers[username]){
        if(password == contacts.loginUsers[username].password){
            return true;
        } else { return "Contraseña Incorrecta" }
    } else { return "Usuario No Existe"}
}

contacts.register = function(username, password){
    if(contacts.data.hasOwnProperty(username)){
        return `Ya existe el usuario ${username}.`;
    } else {
        contacts.loginUsers[username] = {username, password};
        return true;
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

contacts.deleteContacts = function(info) {
    if(contacts.data[info]){
        delete contacts.data[info];
    };
};

contacts.editarContacto= function(name){
    // console.log(contacts.data[name]); // datos del contacto
};

contacts.obtenerUsuarios = function() {   
    return Object.values(contacts.loginUsers); 
};

module.exports = contacts;