import React from 'react';
import "./App.css";
import {HashRouter, Route} from "react-router-dom";

import NavBar from "./../NavBar/NavBar.jsx";
import Home from "./../Home/Home.jsx";
import About from "./../About/About.jsx";
import Projects from "./../Projects/Projects.jsx";
function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <NavBar/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
