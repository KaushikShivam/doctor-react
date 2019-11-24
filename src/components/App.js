import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
