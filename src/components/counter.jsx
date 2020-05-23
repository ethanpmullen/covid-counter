import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Action creator for redux
function setValue(value) {
  return {
    type: "SET_VALUE",
    value,
  };
}

// Styles
const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 30px 10px;
`;

const Button = styled.button`
  height: 100px;
  color: black;
  border-radius: 25px;

  ${(props) =>
    props.upAndDown &&
    css`
      width: 200px;
      display: inline-block;
      font-family: "Arial Narrow";
      font-size: 60px;
      margin-left: 10px;
      margin-right: 10px;
    `};

  ${(props) =>
    props.upArrowToIncrement &&
    css`
      background-color: #e86f68;
    `};

  ${(props) =>
    props.downArrowToDecrement &&
    css`
      background-color: #50c878;
    `};

  ${(props) =>
    props.resetButton &&
    css`
      background-color: white;
      border: 2px solid black;
      width: 300px;
      font-family: "Arial Narrow";
      font-size: 40px;
    `};

  ${(props) =>
    props.currentCount &&
    css`
      background-color: #e4d8b4;
      width: 300px;
      height: 100px;
      border-radius: 25px;
      font-family: "Arial Narrow";
      font-size: 80px;
    `};
`;

function Counter() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    // const value = store.getState().value;
    value !== 0 && dispatch(setValue(value - 1));
  };

  const handleIncrement = () => {
    // const value = store.getState().value;
    dispatch(setValue(value + 1));
  };

  const handleReset = () => {
    dispatch(setValue(0));
  };

  const handleInput = () => {
    let newNum = +prompt("What would you like to reset to?", "0");
    dispatch(setValue(newNum));
  };

  return (
    <React.Fragment>
      <CounterWrapper>
        <Button currentCount onClick={handleInput}>
          {value}
        </Button>
      </CounterWrapper>
      <ButtonWrapper>
        <Button upAndDown upArrowToIncrement onClick={handleDecrement}>
          ⬇
        </Button>
        <Button resetButton onClick={handleReset}>
          Reset to 0
        </Button>
        <Button upAndDown downArrowToDecrement onClick={handleIncrement}>
          ⬆
        </Button>
      </ButtonWrapper>
    </React.Fragment>
  );
}

export default Counter;
