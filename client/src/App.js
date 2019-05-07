import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Home from './components/home.js';
import { BrowserRouter as Router ,Route } from "react-router-dom";
import Forsale from "./components/findahome/homesSale";

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
          <Route path={"/findahome/"} component={Forsale} />
        </Router>
        </div>

    );
  }
=======
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
>>>>>>> michaelsbranch1
}

export default App;



