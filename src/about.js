import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/navBar";
console.log("Reached!");

ReactDOM.render(
  <React.Fragment>
    <NavBar />
    <header>This app was made using React, Redux, and @emotion/styled</header>
  </React.Fragment>,
  document.getElementById("about")
);

serviceWorker.unregister();
