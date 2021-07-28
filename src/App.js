import React from 'react';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import ArtPage from './ArtPages/ArtPage';
import'./App.css';


function App() {

  return <HashRouter>
    <Route exact path='/:id'>
      <ArtPage />
    </Route>
    <Route exact path='/'>
      <ArtPage/>
    </Route>
  </HashRouter>;
}

export default App;