

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
   title: {
        type: String,
        required: true,
        unique: true
    },
    opening_crawl:{
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date
    },
    comments: {
        type: String
    }

});


const Movie = mongoose.model('Movie',movieSchema);


module.exports = Movie;