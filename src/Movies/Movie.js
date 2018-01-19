import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({title,director,casts,image,url,genre,rating,onChange}) =>(
  <div>
    <h1>{title}</h1>
    <h2>Directed By: {director}</h2>
    <h3>{casts}</h3>
    <h3>{genre}</h3>
    <p><a href={url} target={"_blank"}>{title}</a></p>
    <img src={image} alt=""/><br/>
    Rating:{" "}
    <select onChange={onChange} value={rating} title={title}>
      <option value=" "></option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select><br/>
    <Link to="/movies">Back</Link>
  </div>
)
export default Movie;