const movies=[
  { title: 'The Dark Knight', year: '2008', director: 'Christopher Nolan', casts: 'Christian Bale, Heath Ledger,Aaron Eckhart', url: 'http://www.imdb.com/title/tt0468569/?ref_=nv_sr_1', img:'http://is1.mzstatic.com/image/thumb/Video128/v4/e9/61/d3/e961d39d-f8d8-6b3b-3a2e-dc0432c2fbf4/source/1200x630bb.jpg',genre:'action'},
  { title: 'Inception', year: '2010', director: 'Christopher Nolan', casts: 'Leonardo DiCaprio, Joseph Gordon-Levitt,Ellen Page', url: 'http://www.imdb.com/title/tt1375666/?ref_=nv_sr_1', img: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',genre:'action' },
  { title: 'The Matrix', year: '1999', director: 'Lana Wachowski, Lilly Wachowski (as The Wachowski Brothers)', casts: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss', url: 'http://www.imdb.com/title/tt0133093/?ref_=nv_sr_1', img: 'https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg',genre:'action' },
  { title: 'Training Day', year: '2001', director: 'Antoine Fuqua', casts: 'Denzel Washington, Ethan Hawke, Scott Glenn ', url: 'http://www.imdb.com/title/tt0139654/?ref_=nv_sr_1', img: 'https://images-na.ssl-images-amazon.com/images/I/91EbJZH9JWL._SY445_.jpg',genre:'crime' },
  { title: 'Remember the Titans', year: '2000', director: 'Boaz Yakin', casts: 'Denzel Washington, Will Patton, Wood Harris', url: 'http://www.imdb.com/title/tt0210945/?ref_=nm_flmg_act_22', img: 'https://i.ytimg.com/vi/5pL14IqJPkE/movieposter.jpg',genre:'drama' },
]

const getOne = title => movies.find(movie => movie.title === title)
const getAll = () => movies
const getGenres = () => {
  let accumulator = [];
  movies.forEach(movie=>{
    if(!accumulator.includes(movie.genre)){
      accumulator.push(movie.genre)
    }
  })
  return accumulator;
}

const getByGenre = genre =>{
  return movies.filter(movie=>{
    return movie.genre === genre;
  })
}

const pushMovie = () =>{
  movies.forEach(movie =>{
    if(!movies.includes(movie.title,movie.year,movie.director
    ,movie.casts,movie.url,movie.image,movie.genre)){
      movies.push(movie.title, movie.year, movie.director
        , movie.casts, movie.url, movie.image, movie.genre)
    }
  })
  return movies;
}

export default{
  getOne,
  getAll,
  getGenres,
  getByGenre,
  pushMovie
}