import React from 'react';
import "./App.css";
import {HashRouter, Route} from "react-router-dom";

import NavBar from "./../NavBar/NavBar.jsx";
import Home from "./../Home/Home.jsx";
import About from "./../About/About.jsx";
function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <NavBar/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
