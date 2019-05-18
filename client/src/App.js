import React from "react";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import SingleHomes from "./pages/SingleHomes";
import Error from "./pages/Error";
import Email from "./pages/Email"
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/houses/" component={Houses} />
        <Route exact path="/email/" component={Email} />
        <Route exact path="/houses/:slug" component={SingleHomes} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
