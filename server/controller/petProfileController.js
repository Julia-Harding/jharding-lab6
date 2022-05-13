// Output to the log that the module is loaded successfully
console.log("[petProfileController] initialized");

let Pet = require("../model/petProfile");
let petProfiles = require('../service/petProfileService');

//pet array
let pets =[];

// create a pet
let mittens = Pet.createPet(0, "Mittens", "female", "8", "cat");
let paddington = Pet.createPet(1, "Paddington", "male", "5", "dog");
let archie = Pet.createPet(2, "Archie", "male", "9", "cat");
let bailey = Pet.createPet(3, "Bailey", "male", "7", "dog");

// add the pet to the pets array
pets.push(mittens);
pets.push(paddington);
pets.push(archie);
pets.push(bailey);

// save pet with petProfile Service
petProfiles.savePetProfile(mittens);
petProfiles.savePetProfile(paddington);
petProfiles.savePetProfile(archie);
petProfiles.savePetProfile(bailey);

// send entire Pets array as body of the response as json
exports.getAllPets = async ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    let pets = await petService.getAllPets();
    console.log(" 2: " + pets );
    res.send( JSON.stringify( petProfles ));
}

// retrieve the Pets int he index parameter of the request and return asn json
exports.getPets = async ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( pets[ req.params.index ] );
}

// this is a stub to replace the use of getPets for the feed, once users are included
exports.getPetForUser = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    // petProfiles for a user
    res.send( null );
}

// save a pet :D
exports.savePet = async ( req, res ) => {
    let newPetProfile = Pet.createPet( req.body.petName, req.petSex, req.petAge, req.petType);
    petProfiles.push( newPetProfile );
}