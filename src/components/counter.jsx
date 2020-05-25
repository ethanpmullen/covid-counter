import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

// Action creator for redux
function doSetValue(value) {
  return {
    type: "SET_VALUE",
    value,
  };
}

function Counter() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  function handleDecrement() {
    if (value === 0) {
      return;
    }
    dispatch(doSetValue(value - 1));
  }

  function handleIncrement() {
    dispatch(doSetValue(value + 1));
  }

  function handleReset() {
    dispatch(doSetValue(0));
  }

  function handleInput() {
    let newNum = +prompt("What would you like to reset to?", "0");
    if (!newNum) {
      return;
    }
    dispatch(doSetValue(newNum));
  }

  return (
    <div>
      <Container>
        <CurrentCount onClick={handleInput}>{value}</CurrentCount>
      </Container>
      <Container>
        <UpArrowToIncrement onClick={handleDecrement}>⬇</UpArrowToIncrement>
        <ResetButton onClick={handleReset}>Reset to 0</ResetButton>
        <DownArrowToDecrement onClick={handleIncrement}>⬆</DownArrowToDecrement>
      </Container>
    </div>
  );
}

export default Counter;

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

const Button = styled.button`
  height: 100px;
  color: black;
  border-radius: 25px;
  font-family: "Arial Narrow";
  display: inline-block;
`;

const CurrentCount = styled(Button)`
  background-color: #e4d8b4;
  width: 300px;
  border-radius: 25px;
  font-size: 80px;
`;

const UpAndDown = styled(Button)`
  width: 200px;
  font-size: 60px;
  margin-left: 10px;
  margin-right: 10px;
`;

const UpArrowToIncrement = styled(UpAndDown)`
  background-color: #e86f68;
`;

const DownArrowToDecrement = styled(UpAndDown)`
  background-color: #50c878;
`;

const ResetButton = styled(Button)`
  background-color: white;
  border: 2px solid black;
  width: 300px;
  font-size: 40px;
`;
