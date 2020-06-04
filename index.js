const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();

const openWeatherMap = require('./lib/openWeatherMap');
const nasaapi = require('./lib/nasaapi');
const asoiaf = require('./lib/asoiaf');
const starWars = require('./lib/starWars');
const rickAndMorty = require('./lib/rickAndMorty');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout', 
    extname: 'hbs'
}))

app.set('view engine', '.hbs');

app.get('/', async (req, res) => {
    let data = await openWeatherMap.getWeather();
    console.log(data);

    let timezone = data.timezone;
    let visibility = data.visibility;

    res.render('index', { timezone, visibility })
})

app.get('/nasa', async (req, res) => {
    let data = await nasaapi.getnasadata();
    console.log(data);

    let title = data.title;
    let date = data.date;
    let explaination = data.explaination;

    res.render('nasa', { title, date, explaination })
})

app.get('/asoiaf', async (req, res) => {
    let data = await asoiaf.getasoiafdata();
    console.log(data);

    let name = data.name;
    let aliases = data.aliases;

    res.render('asoiaf', { name, aliases });
})

app.get('/starwars'), async (req, res) => {
    res.render('starwars');
}

app.post('/starwars', async (req, res) => {
    let number = req.body.number;
    let response = await starWars.sortStartWarsChar(number);

    res.render('starwars', { response })
})

app.get('/rickandmorty'), async (req, res) => {
    res.render('rickandmorty');
}

app.post('/rickandmorty'), async (req, res) => {
    let number = req.body.number;
    let response = await rickAndMorty.sortRickAndMortyChar(number);
    res.render('rickandmorty', { response })
}

app.listen(3000, () => {
    console.log('listening on port 3000');
})