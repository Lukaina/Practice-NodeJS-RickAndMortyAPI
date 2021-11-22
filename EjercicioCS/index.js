const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let { data: {results} } = response;
    let characters = results.map((character) => {
        return { //Lo que quiero obtener de cada personaje
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
        };
    }).map((personaje) => Object.values(personaje).join(',')) //Para que me retorne únicamente los valores
    .join('\n')

    await fs.writeFile(path.join(__dirname, 'data.csv'), characters);
    // console.log(__dirname); //Devuelve el path donde me encuentro
    // console.log(path.join(__dirname, 'data.csv'));
    console.log(characters);
};

main();