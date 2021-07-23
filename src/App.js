import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import ArtPage from './ArtPage';


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