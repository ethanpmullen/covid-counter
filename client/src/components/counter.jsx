import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import {
  doIncrement,
  doDecrement,
  doReset,
  doInitializeCount,
} from "./actions";

const select = (state) => ({
  value: state.value,
});

const actions = {
  increment: doIncrement(),
  decrement: doDecrement(),
  reset: doReset(),
  // initializeCount: dispatch(doInitializeCount()),
};

function Counter({ value, increment, decrement, reset, initializeCount }) {
  // function handleInput() {
  //   let newNum = +prompt("What would you like to reset to?", "0");
  //   if (!newNum) {
  //     return;
  //   }
  //   dispatch(doSetValue(newNum));
  // }

  // useEffect(() => initializeCount, []);

  return (
    <div>
      <Container>
        <CurrentCount>{value}</CurrentCount>
      </Container>
      <Container>
        <UpArrowToIncrement onClick={value > 0 ? () => decrement() : null}>
          ⬇
        </UpArrowToIncrement>
        <ResetButton onClick={() => reset()}>Reset to 0</ResetButton>
        <DownArrowToDecrement onClick={() => increment()}>
          ⬆
        </DownArrowToDecrement>
      </Container>
    </div>
  );
}
export default connect(select, actions)(Counter);

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
