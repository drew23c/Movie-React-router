import React from 'react';
import {Route, Switch} from 'react-router-dom';
import movieAPI from './movieAPI';

class Ratings extends React.Component{
  constructor(){
    super()
    this.count = ['0','1', '2', '3', '4', '5']
    this.state={
      count:'0'
    }
  }

renderAllRatings = () =>{
  const movie = movieAPI.getAll();
  return(
    <div>
    <ul>
      {movie.map(movie =>(<li>
      <h1>{movie.title}</h1>
      <h2>{movie.genre}</h2>
      Rating{" "}
      <select onChange={this.ratingChange}>
        {this.count.map( c=> <option value={c}>{c}</option>)}
      </select> 
      </li>))}
    </ul>
    </div>
  )
}



  render(){ 
  return( 
  <div>
  <Switch>
    <Route exact path="/ratings" render={this.renderAllRatings}/>
  </Switch>
  </div>
  )
  }
}
export default Ratings