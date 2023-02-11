import React from 'react';
import "./App.css";
import {HashRouter, Route} from "react-router-dom";

import NavBar from "./../NavBar/NavBar.jsx";
import Home from "./../Home/Home.jsx";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <NavBar/>
          <Route path="/" exact component={Home}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
