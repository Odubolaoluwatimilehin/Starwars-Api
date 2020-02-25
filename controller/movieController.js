
const starwars = require('../api/starwars');
const Movie = require('../model/movieModel');
const Comment = require('../model/commentModel');


exports.getMovies =  async (req,res) => {
 try {

   const movie = await starwars.get('/');

   
   await movie.data.results.map(async item => {
    let newMovie = {
       title: item.title,
       opening_crawl: item.opening_crawl,
       created: item.created
    }
   
    let isAvail = await Movie.findOne({title: newMovie.title});
   
    if(isAvail) {
      return (
         res.status(200).json({
            status: 'ok',
            data: movieList
        })
      );
    }
      newMovie = Movie.create(newMovie);   
    });

    const movieList =  await Movie.find().populate("Comment");
     
     res.status(200).json({
         status: 'ok',
         data: movieList
     });

   } catch (err){
      console.log(err);
   }

}

exports.getMovie = async (req, res) => {
   try {
      const movie = await Movie.findById({ _id: req.params.id });

      res.status(200).json({
         status: 'ok',
         data: movie
     });

   }
   catch (err){
      console.log(err);
   }
}

exports.addComment = async (req,res) => {
   try {
      const newComment = await Comment.create({comment:req.body.comment});
      let commentMovie;
      if(newComment){
         commentMovie =  await Movie.findByIdAndUpdate({ _id: req.params.id },{comment:newComment._id },{
            new: true,
        });
      }

      res.status(200).json({
         status: 'ok',
         data:commentMovie
     });
    
   }
   catch (err){
      console.log(err);
   }

}

