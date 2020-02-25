
const express = require('express');

const movieRouter = express.Router();
const {fetchMovie} = require('../controller/movieController');


movieRouter.get('/name', fetchMovie);


module.exports = movieRouter;