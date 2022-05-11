// Sends petProfile.js to petProfileController
let petProfileController = require('../controller/petProfileController');

// Output to the log that the module is loaded successfully
console.log("[petProfile] initialized");


// Pet class
class Pet {
    constructor (userid, petName, petSex, petAge, petType) {
        this.userid = userid;
        this.petName = petName;
        this.petSex = petSex;
        this.petAge = petAge;
        this.petType = petType;
    }
}

exports.createPet = function( userid, petName, petSex, petAge, petType) {
    return new Pet( userid, petName, petSex, petAge, petType);
}