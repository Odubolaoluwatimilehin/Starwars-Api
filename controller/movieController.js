
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

      newMovie = Movie.create(newMovie);   
    });

   
     movieList =  await Movie.find().sort({'created': 'asc'}).populate("comment");
     
     res.status(200).json({
         status: 'ok',
         data: movieList
     });

   } catch (err){
      res.status(400).json({
         status: 'Could Not get movies',
         message: err
     }) 
   }

}

exports.getMovie = async (req, res) => {
   try {
      const movie = await Movie.findById({ _id: req.params.id }).populate("comment");
      

      res.status(200).json({
         status: 'ok',
         data: movie
     });

   }
   catch (err){
      res.status(400).json({
         status: 'Could Not get movie',
         message: err.message
     }) 
   }
}

exports.addComment = async (req,res) => {
   try {
     
         const comment = new Comment({comment:req.body.comment});
         comment
           .save()
           .then(comment => {
             return Movie.findById(req.params.id);
           })
           .then(Movie => {
             Movie.comment.unshift(comment);
             return Movie.save();
           })
           .then(Movie => {
            res.status(200).json({
               status: 'ok',
                data:comment
            });
           })
           .catch(err => {
             console.log(err);
           });
     
     
      
    
   }
   catch (err){
      res.status(400).json({
         status: 'Could not add Comment',
         message: err
     }) 
   }

}



exports.deleteComment = async (req,res) => {
   try {
      await Comment.where(req.params.id).findOneAndDelete(true);
      res.status(201).json({
         status: 'ok',
         message: 'Record Deleted'
     })
 } catch (err){
      res.status(400).json({
          status: 'Delete failed ',
          message: err
      }) 
 }
}

