import React from "react";

import "./Header.css";

import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <Navigation />
        <h1>HOT or COLD: mkmak2</h1>
      </header>
    );
  }
}

export default Header;
