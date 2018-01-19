import React from 'react'
import {Route} from 'react-router-dom'

const pushMovie = ({year, title,director,casts,url,img,genre, handleClick}) =>(
  <div>
    <h1>Movie Add</h1>
    <form action="" method="POST">
     Year: <input id={year} type="text" />
     Title: <input id={title} type="text" />
     Director: <input id={director} type="text" />
     Casts(3): <input id={casts} type="text" />
     Url: <input id={url} type="text" />
     Image: <input id={img} type="text" />
     Genre: <input id={genre} type="text" />
     <button onClick={handleClick}>Submit</button>
    </form>
  </div>
)

const MovieAdd = () =>(
  <Route exact path="/add" render={pushMovie}/>
)


export default MovieAdd;