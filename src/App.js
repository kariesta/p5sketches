import React from 'react';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import ArtPage from './ArtPages/ArtPage';
import'./App.css';
import FilterPage from "./ArtPages/FilterPage";


function App() {

  return <HashRouter>
    <Route exact path='/list'>
      <FilterPage/>
    </Route>
    <Route exact path='/post/:id'>
      <ArtPage />
    </Route>
    <Route exact path='/'>
      <ArtPage />
    </Route>
  </HashRouter>;
}

export default App;