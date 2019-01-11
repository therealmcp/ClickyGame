import React from "react";

const navStyle = {
    color: "black",
    padding: "20px"
}

function Nav(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <ul className="navbar-nav mx-auto">
          <p className="nav-item" style={navStyle}>{props.result}</p>
          <p className="nav-item" style={navStyle}>Your score: {props.currentScore}</p>
          <p className="nav-item" style={navStyle}>Top score: {props.topScore}</p>
      </ul>
    </nav>
  );
}

export default Nav;