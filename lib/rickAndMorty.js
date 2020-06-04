const fetch = require('node-fetch');

const getRickAndMortyChar = async (number) => {
    let data = await fetch`https://rickandmortyapi.com/api/character/${number}`;
    return await data.json();
}

const sortRickAndMortyChar = async (number) => {
    let data = await getRickAndMortyChar(number);
    let response = {
        name: data.name,
        species: data.species
    }
    return response;
}
module.exports = {
    sortRickAndMortyChar
}