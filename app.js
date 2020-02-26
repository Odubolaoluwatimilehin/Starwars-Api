

const express = require('express');
const app = new express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});
const  movieRouter = require('./routes/movieRoutes');
const bodyParser = require('body-parser');

//connect to db
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log('DB connection is successful!')
    );;


//middleware
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());

//routes
app.use('/api/movie', movieRouter);


app.all('*', (req,res) => {
res.status(400).json({
      status:'Not Found',
      message: "URL not found"
    }) 
  })
  


const port = process.env.PORT;
app.listen(port , '127.0.0.1', () => console.log('App running on port' + port));