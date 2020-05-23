import React from "react";
import "./App.css";
import Counter from "./components/counter";
import NavBar from "./components/navBar";
import styled from "@emotion/styled";

const Navigation = styled.div`
  background-color: #75acc0;
  height: 80px;
`;

function Home() {
  return (
    <div>
      <Navigation>
        <NavBar />
      </Navigation>
      <Counter />
    </div>
  );
}

export default Home;
