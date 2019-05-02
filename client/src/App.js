import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';
import { BrowserRouter as Router ,Route } from "react-router-dom";
import Forsale from "./components/homesSale";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <h1 className="App-title">home finder</h1>
      //   </header>
      //   <Home />
      // </div>
        
      <div>

        <Router>
          <Route exact path={"/"} component={Home} />
          <Route path={"/home"} component={Forsale} />
        </Router>
        </div>

    );
  }
}

export default App;



