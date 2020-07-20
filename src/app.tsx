import React from 'react';
import ReactDom from 'react-dom';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
import Home from './views/Home'

const App = () => {
  return (
    <Home></Home>
  )
}

ReactDom.render(<App />, mainElement);
