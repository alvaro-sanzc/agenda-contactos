//const database = require("..");

contacts = {};

contacts.data = [];

contacts.users_login = [];

contacts.login = function(user, password){
    const user_exists = contacts.users_login.find(u => u.username == user)
    if(user_exists.username == user){
        if(user_exists.password == password){
            return true
        } else{ return false}
    } else { return false }
}

contacts.register = function(username, password){
    user = {"username": username, "password": password};
    contacts.users_login.push(user);
}

contacts.addData = function(info) {
    contacts.data.push(info);
    return contacts.data;
}


module.exports = contacts;