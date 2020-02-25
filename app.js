

const express = require('express');
const app = new express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});
const  movieRouter = require('./routes/movieRoutes');
const bodyParser = require('body-parser');

//connect to db
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log('DB connection is successful!')
    );;


//middleware
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());

//routes
app.use('/api/movie', movieRouter);


const port = 3001;
app.listen(port , '127.0.0.1', () => console.log('App running on port' + port));