let petProfileRoute = require('../route/petProfileRoute');

// Output to the log that the module is loaded successfully
console.log("[userRoute] initialized");

// require the express library
var express = require('express');

// create chainable route handlers for a path by using app.route()
// see http://expressjs.com/en/guide/routing.html
var router = express.Router();

// all useres routes
router.route('/')
    .get( (req, res) => {
        userController.getAllUsers( req, res );
    })
    .post( ( req, res ) => {
        userController.saveUser( req, res );
    }
    );


module.exports = router;