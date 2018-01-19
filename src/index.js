import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';
import App from './App';
import Style from './Style.css';

const BgC = (props) =>(
  <div className="cool-bg">{props.children}</div>
)

const BgImage = props => (
  <div className="bg-image">{props.children}</div>
)


render(
  <BrowserRouter>
  <BgC>
    <App/>
  </BgC>
  </BrowserRouter>,
  document.getElementById('root')
)