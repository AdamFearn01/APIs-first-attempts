const fetch = require('node-fetch');
const URI = 'https://anapioficeandfire.com/api/characters/583';

const getasoiafdata = async () => {
    let data = await fetch(URI);
    return await data.json();
}

module.exports = {
    getasoiafdata
}