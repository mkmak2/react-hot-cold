import React from "react";

import Header from "./Header";
import Response from "./Response";
import UserInput from "./UserInput";
import GuessCounter from "./GuessCounter";
import UserAnswers from "./UserAnswers";

import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: {}
    };
  }

  enterInput = guess => {
    // 1. Take a copy of the existing state
    const guesses = { ...this.state.guesses };
    // 2. Add our new input to that inputs variable
    guesses[`Guess#${Date.now()}`] = guess;
    // 3. Set the new userInputs object to state
    this.setState({ guesses });
  };

  render() {
    return (
      <div className="Hot-or-Cold">
        <Header />
        <Response />
        <div className="input-section">
          <UserInput enterInput={this.enterInput} />
          <section className="counter-section">
            <GuessCounter numberOfGuesses={this.state.guesses} />
          </section>
          <section className="guesses">
            {Object.keys(this.state.guesses).map(key => (
              <UserAnswers
                key={key}
                index={key}
                answers={this.state.guesses[key]}
              />
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Game;
