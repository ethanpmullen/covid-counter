import axios from "axios";

export function doIncrement() {
  return (dispatch, getState) => {
    axios.post("/api", { type: "INCREMENT" }).then((response) =>
      dispatch({
        type: "INCREMENTED",
        payload: { value: response.data.value },
      })
    );
  };
}

export function doDecrement() {
  return (dispatch, getState) => {
    axios.post("/api", { type: "DECREMENT" }).then((response) =>
      dispatch({
        type: "DECREMENTED",
        payload: { value: response.data.value },
      })
    );
  };
}

export function doReset() {
  return (dispatch, getState) => {
    axios.post("/api", { type: "RESET" }).then((response) =>
      dispatch({
        type: "RESET",
        payload: { value: response.data.value },
      })
    );
  };
}

export function doInitializeCount() {
  return (dispatch, getState) => {
    axios.get("/api").then((response) =>
      dispatch({
        type: "INITIALIZED_COUNT",
        payload: { value: response.data.value },
      })
    );
  };
}

export function doInput(newValue) {
  console.log(newValue);
  return (dispatch, getState) => {
    axios.post("/api", { type: "INPUT", newValue }).then((response) =>
      dispatch({
        type: "INPUTTED_VALUE",
        payload: { value: response.data.value },
      })
    );
  };
}
