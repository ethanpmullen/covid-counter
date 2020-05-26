import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Counter />
    </div>
  );
}

export default Home;
