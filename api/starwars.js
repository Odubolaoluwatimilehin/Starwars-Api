const axios = require('axios');

starwars = axios.create({
        baseURL: 'https://swapi.co/api/films'
})


module.exports = starwars;