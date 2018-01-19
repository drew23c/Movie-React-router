import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Movies from './Movies/Movies';
import Home from './Home';
import Genre from './Movies/Genre'
import MovieAdd from './Movies/MovieAdd'
import MovieRatings from './Movies/MovieRatings'

const App = () =>(
  <div>
    <nav>
      <Link to="/">Home</Link>
      {" "}
      <Link to="/movies">Movies</Link>
      {" "}
      <Link to="/genres">Genres</Link>
      {" "}
      <Link to="/ratings">Ratings</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/movies" component={Movies}/>
      <Route path="/genres" component={Genre}/>
      <Route path="/ratings" component={MovieRatings} />
    </Switch>
  </div>
)
export default App;