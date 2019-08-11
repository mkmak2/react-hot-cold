import React from "react";

class GuessCounter extends React.Component {
  render() {
    const counter = Object.keys(this.props.numberOfGuesses).length;
    return <h2 className="count">Guess # {counter}</h2>;
  }
}

export default GuessCounter;
