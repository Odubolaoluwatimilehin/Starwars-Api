
const express = require('express');

const movieRouter = express.Router();
const {getMovie, getMovies,addComment} = require('../controller/movieController');


movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovie);
movieRouter.post('/:id', addComment);

module.exports = movieRouter;