import React from "react";
import "./Response.css";

class Response extends React.Component {
  hotOrCold = (correctAnswer, lastGuessValue) => {
    let difference = Math.abs(lastGuessValue - correctAnswer);
    let feedback;
    if (difference == 0) {
      feedback = "YOU GOt IT!";
    } else if (difference <= 5) {
      feedback = "HOT";
    } else if (difference <= 15) {
      feedback = "WARM";
    } else {
      feedback = "COLD";
    }
    return feedback;
  };

  render() {
    const { allGuessses, correctAnswer, index } = this.props;
    const lastGuess = allGuessses[index];
    let feedback = "";
    if (lastGuess) {
      const lastGuessValue = lastGuess["inputs"];
      feedback = this.hotOrCold(correctAnswer, lastGuessValue);
    }

    return <div className="response">{feedback}</div>;
  }
}

export default Response;
