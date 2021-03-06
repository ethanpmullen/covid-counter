import React from "react";
import Home from "./Home";
import About from "./About";
import { Route } from "react-router-dom";

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </div>
  );
}

export default App;
