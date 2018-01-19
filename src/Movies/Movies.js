import React from 'react';
import Movie from './Movie';
import MovieList from './MovieList';
import movieAPI from './movieAPI';
import Ratings from './MovieRatings'
import {Route, Switch} from 'react-router-dom';


class Movies extends React.Component{
  constructor(){
    super()
    this.state={
      
    }
  }
  renderMovie = props =>{
    const {title} = props.match.params
    let rating = this.state[title]
    if(!rating){rating = ""}
    const movie = movieAPI.getOne(title)
    if(!movie){
      return <div>This movie is not part of the list</div>
    }else{
      return <Movie year={movie.year}
      title={movie.title}
      director={movie.director}
      casts={movie.casts}
      image={movie.img}
      url={movie.url}
      rating={rating}
      genre={movie.genre} 
      onChange={this.ratingChange}/>
    }
  }
  renderMovieList = () =>{
    const movies = movieAPI.getAll();
    return <MovieList movies={movies} />
  }

  ratingChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:title" render={this.renderMovie}/>
        </Switch>
      </div>
    )
  }
}
export default Movies