import React from "react";
import "./App.css";
import Counter from "./components/counter";
import NavBar from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <Counter />;
    </React.Fragment>
  );
}

export default App;
