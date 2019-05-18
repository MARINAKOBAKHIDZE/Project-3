import React, {Fragment}from "react";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import SingleHomes from "./pages/SingleHomes";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/houses/" component={Houses} />
        <Route exact path="/houses/:slug" component={SingleHomes} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
