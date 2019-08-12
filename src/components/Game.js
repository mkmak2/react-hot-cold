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
    const correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer);

    this.state = {
      guesses: {},
      correctAnswer: correctAnswer,
      index: ""
    };
  }

  enterInput = guess => {
    // 1. Take a copy of the existing state
    const guesses = { ...this.state.guesses };
    // 2. Add our new input to that inputs variable
    const index = `Guess#${Date.now()}`;
    guesses[index] = guess;
    // 3. Set the new userInputs object to state
    const correctAnswer = this.state.correctAnswer;
    this.setState({ guesses, correctAnswer, index });
  };

  render() {
    return (
      <div className="Hot-or-Cold">
        <Header />
        <div className="app">
          <Response
            allGuessses={this.state.guesses}
            correctAnswer={this.state.correctAnswer}
            index={this.state.index}
          />
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
      </div>
    );
  }
}

export default Game;
