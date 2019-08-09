import React from "react";

import Header from "./Header";
import Response from "./Response";
import UserInput from "./UserInput";
import GuessCounter from "./GuessCounter";
import UserAnswers from "./UserAnswers";

class Game extends React.Component {
  render() {
    return (
      <div className="Hot-or-Cold">
        <div className="menu">
          <Header />
        </div>
        <Response />
        <UserInput />
        <GuessCounter />
        <UserAnswers />
      </div>
    );
  }
}

export default Game;
