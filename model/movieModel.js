

const mongoose = require('mongoose');


var Schema = mongoose.Schema;

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
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    // },
    // conmentNumber: {
    //     type: Number,
    //     required: true,
    //     deafult: 0
    //   },
    created: {
        type: Date,
      
    }

});


// moviaSchema.pre('save', async function(next){
//     this.contentNumber += 1;
// })

const Movie = mongoose.model('Movie',movieSchema);


module.exports = Movie;