import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Title = styled.div`
  order: 1;
  color: white;
  font-family: "Arial Narrow";
  font-weight: bold;
  font-style: italic;
  font-size: 50px;
  padding: 3px 5px;
`;

const NavigationWrapper = styled.div`
  float: right;
  order: 2;
  text-decoration: none;
  display: block;
`;

const NavigationBar = styled.ul`
  padding: 1em;
  list-style: none;
  margin-top: 30px;
  margin-right: 20px;
  display: inline-block;
`;

const ListItem = styled.li`
  margin-right: 20px;
  display: inline-block;
`;

const LinkStyle = styled.a`
  color: white;
  font-family: "Arial Narrow";
  font-size: 18px;
  &:hover {
    color: black;
  }
`;

function NavBar() {
  return (
    <HeaderWrapper>
      <Title>BASIC COUNTER</Title>
      <NavigationWrapper>
        <NavigationBar>
          <ListItem>
            <LinkStyle>
              <Link to="/"> Home</Link>
            </LinkStyle>
          </ListItem>
          <ListItem>
            <LinkStyle>
              <Link to="/about"> Home</Link>
            </LinkStyle>
          </ListItem>
        </NavigationBar>
      </NavigationWrapper>
    </HeaderWrapper>
  );
}

export default NavBar;
