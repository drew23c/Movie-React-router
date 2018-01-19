import React from 'react';
import {Link, Route,Switch} from 'react-router-dom';
import movieAPI from './movieAPI';

const renderOneGenre = props =>{
  const genre = props.match.params.genre
  let movies = movieAPI.getByGenre(genre);
  return(
    <div>
      <h1>{`${genre.toUpperCase()}`}</h1>
      <ul>
        {movies.map(movie => (
            <li>
              <Link to={`/movies/${movie.title}`} key={movie.title}>
                {movie.title}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

const renderAllGenres = () =>{
  let genres = movieAPI.getGenres();
  return(
    <div>
      <h1>Genres</h1>
    <ul>
      {genres.map( genre=>(<li>
        <Link to={`/genres/${genre}`} key={genre}>
        {genre}
        </Link>
      </li>))}
    </ul>
    </div>
  )
}

const Genres = () =>(
  <div>
    <Switch>
      <Route exact path="/genres" render={renderAllGenres} />
      <Route path="/genres/:genre" render={renderOneGenre}/>
    </Switch>
  </div>
)

export default Genres;