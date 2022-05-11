let userController = require('../controller/userController');
let Pet = require("../model/petProfile")

// Output to the log that the module is loaded successfully
console.log("[petProfileController] initialized");

//pet array
let pets =[];

// create a pet
let mittens = Pet.createPet(0, "Mittens", "female", 8, "cat");
let paddington = Pet.createPet(1, "Paddington", "male", 5, "dog");
let archie = Pet.createPet(2, "Archie", "male", 9, "cat");
let bailey = Pet.createPet(3, "Bailey", "male", 7, "dog");

// add the pet to the user
pets.push(mittens);
pets.push(paddington);
pets.push(archie);
pets.push(bailey);

console.log(pets[0]);