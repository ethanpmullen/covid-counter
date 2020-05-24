import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import styled from "@emotion/styled";

const Navigation = styled.div`
  background-color: #75acc0;
  height: 80px;
`;

function About() {
  return (
    <div>
      <Navigation>
        <NavBar />
      </Navigation>
      <h1>This is an app created using React and Redux!</h1>
    </div>
  );
}

export default About;
