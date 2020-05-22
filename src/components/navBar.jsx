import React from "react";

function NavBar() {
  return (
    <div className="headerWrapper">
      <div className="title">BASIC COUNTER</div>
      <div className="navigationWrapper">
        <ul className="navBar">
          <li>
            <a href="index.html"> Main</a>
          </li>
          <li>
            <a href="about.html"> About</a>
          </li>
          {/* <li>
            <a href="https://docs.google.com/document/d/1-_bpYqZ7PGYzkn_9E1bRAJKWLLN-EyK5nq6GWdcOBOM/edit?usp=sharing">
              Google Doc
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
