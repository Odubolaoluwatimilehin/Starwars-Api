
const starwars = require('../api/starwars');
const Movie = require('../model/movieModel');

exports.fetchMovie =  async (req,res) => {
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

    const movieList =  await Movie.find();
     
     res.status(200).json({
         status: 'ok',
         data: movieList
     });

   } catch (err){
      console.log(err);
   }

}

