import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import ArtPage from './ArtPages/ArtPage';
import'./App.css';


function App() {

  return <BrowserRouter>
    <Route exact path='/:id'>
      <ArtPage/>
    </Route>
    <Route exact path='/'>
      <ArtPage/>
    </Route>
  </BrowserRouter>;
}

export default App;