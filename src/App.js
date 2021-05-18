import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const Name = () => {
    return (
      <>
        <h3>Name page </h3>
      </>
    );
  };
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
