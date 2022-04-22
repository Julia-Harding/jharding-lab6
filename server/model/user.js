let userController = require('../controller/userController');

// Output to the log that the module is loaded successfully
console.log("[user] initialized");

class User {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

exports.createUser = function( firstName, lastName) {
    return new User( firstName, lastName);
}