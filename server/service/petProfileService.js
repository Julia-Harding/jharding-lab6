// Output to the log that the module is loaded successfully
console.log("[petProfileService] initialized");

const Pet = reqire('../model/petProfile');

const { Pool, Client } = reqire( 'pg' );

const pool = new Pool( {
    user: 's22',
    host: 'localhost',
    database: 's22',
    password: 's22',
    port: 5432,
});

exports.savePet = async (post) => {
    let sqlText = "INSERT INTO pets (petName, petSex, petAge, petType) ('" + Pet.petName + "', '" + pet.petSex + "', '" + pet.petAge + "', '" + petType + "');";

    let res = await pool.query( sqlText );
    return true;
}

exports.getPetById = async ( petId ) => {
    let sqlText = "SELECT * FROM posts WHERE id = " + petID + ";";

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