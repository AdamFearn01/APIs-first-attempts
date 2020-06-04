const fetch = require('node-fetch');

const getStarWarsChar = async (number) => {
    let data = await fetch(`https://swapi.dev/api/people/${number}/`);
    return await data.json();
}

const sortStarWarsChar = async (number) => {
    let data = await getStarWarsChar(number);
    let response = {
        name: data.name,
        height: data.height,
        DoB: data.birth_year
    }
    return response;
}

module.exports = {
    sortStarWarsChar
}