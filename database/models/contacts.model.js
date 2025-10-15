contacts = {};

contacts.data = [];

contacts.addData = function(info) {
    contacts.data.push(info);
    return contacts.data;
}

module.exports = contacts;