const fetch = require('node-fetch');
const URI = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASAAPPID}`;

const getnasadata = async () => {
    let data = await fetch(URI);
    let JSONobject = await data.json();
    return JSONobject;
}

module.exports = {
    getnasadata
}