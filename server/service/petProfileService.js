// Output to the log that the module is loaded successfully
console.log("[petProfileService] initialized");

const Pet = require('../model/petProfile');

const { Pool, Client } = require( 'pg' );

const pool = new Pool( {
    user: 's22',
    host: 'localhost',
    database: 's22',
    password: 's22',
    port: 1337,
});

pool.query( 'SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
})

exports.savePetProfile = async (petProfile) => {
    let sqlText = "INSERT INTO pets (petName, petSex, petAge, petType) ('" + Pet.petName + "', '" + Pet.petSex + "', '" + Pet.petAge + "', '" + Pet.petType + "');";

    let res = await pool.query( sqlText );
    return true;
}

exports.getPetById = async ( petId ) => {
    let sqlText = "SELECT * FROM petProfiles WHERE id = " + petID + ";";

    let res = await pool.query(sqlText);
    if(res.rowCount > 0) {
        return new Pet.createPet( res.petName, res.petSex, res.petAge, res.petType );
    }
}

exports.getAllPets = async function () {
    let sqlText = "SELECT * FROM pets";

    let res = await pool.query(sqlText);

    let pets = [];
    for( let i=0; i<res.rows.length; i++) {
        pets.push( Pet.createPet( res.rows[i].petName, res.rows[i].petSex, res.rows[i].petAge, res.rows[i].petType ) );
    }
    console.log("pets");
    return pets;
}