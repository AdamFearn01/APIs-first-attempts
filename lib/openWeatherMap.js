const fetch = require('node-fetch');
const URI = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.APPID}`;

const getWeather = async () => {
    let data = await fetch(URI);
    let JSObject = await data.json();
    return JSObject;
}

module.exports = {
    getWeather
}