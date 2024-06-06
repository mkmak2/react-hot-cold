import React from "react";

import "./Header.css";

import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <Navigation />
        <h1>KMAKU GIGA KOKS</h1>
      </header>
    );
  }
}

export default Header;
