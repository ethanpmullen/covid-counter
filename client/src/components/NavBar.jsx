import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Container>
      <Title>BASIC COUNTER</Title>
      <NavigationWrapper>
        <LinkStyle>
          <Link to="/"> Home</Link>
        </LinkStyle>
        <LinkStyle>
          <Link to="/about"> About</Link>
        </LinkStyle>
      </NavigationWrapper>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #75acc0;
  height: 80px;
  font-family: "Arial Narrow";
  color: white;
`;

const Title = styled.div`
  font-weight: bold;
  font-style: italic;
  font-size: 50px;
  padding: 3px 5px;
`;

const NavigationWrapper = styled.div`
  padding: 1em;
  margin: 30px;
  display: flex;
`;

const LinkStyle = styled.div`
  font-size: 18px;
  margin-left: 10px;
  &:hover {
    color: black;
  }
`;
