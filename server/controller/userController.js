let petProfileController = require('../controller/petProfileController');
let User = require('../model/user');
let Pet = require('../model/user');

// Output to the log that the module is loaded successfully
console.log("[userController] initialized");

// create an array to hold the created users
let users = [];

// create a user
let brian = User.createUser("Brian", "Gormanly");
let julia = User.createUser("Julia", "Harding");
let colin = User.createUser("Colin", "Kelly");
let eleanor = User.createUser("Eleanor", "Rossini");

// add the user to the array
users.push(brian);
users.push(julia);
users.push(colin);
users.push(eleanor);

// send entire users array as the body of the response as json
exports.getAllUsers = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json');
    res.send( users );
}

// retrieve the user in the :index parameter of the request and return as json
exports.getUser = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users [ req.params.index ] );
}

// save a user
exports.saveUser = ( req, res ) => {
    let newUser = User.createUser( req.body.firstName, req.body.lastName );
    users.push( newUser );
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users );
}