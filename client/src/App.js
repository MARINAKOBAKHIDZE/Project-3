import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Houses from './pages/Houses';
import SingleHome from './pages/SingleHomes';
import Error from './pages/Error';

import{Route, Switch} from 'react-router-dom';


function App() {
    return (
    <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/houses" component={Houses}/>
            <Route exact path="/houses/:slug" component={SingleHome}/>
            <Route component={Error} />
        </Switch>
    </>
    );    
}

export default App;



