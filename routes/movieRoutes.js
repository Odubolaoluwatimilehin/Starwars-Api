
const express = require('express');

const movieRouter = express.Router();
const {getMovie, getMovies,addComment, deleteComment } = require('../controller/movieController');


movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovie);
movieRouter.post('/:id', addComment);
movieRouter.delete('/:id', deleteComment);
module.exports = movieRouter;