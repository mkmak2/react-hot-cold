import React from "react";
import { shallow } from "enzyme";

import Response from "./Response";

describe("<Response />", () => {
  it("Renders without crashing", () => {
    let allGuesses = {};
    let key = {};
    shallow(
      <Response allGuessses={allGuesses} correctAnswer={10} index={key} />
    );
  });

  it("Should return 'You got it' for correct guess", () => {
    const answer = 25;
    let guess1 = { inputs: 55 };
    let guess2 = { inputs: 25 };
    let allGuesses = {};
    allGuesses["Guess#1"] = guess1;
    allGuesses["Guess#2"] = guess2;
    let correctAnswerKey = "Guess#2";
    let wrapper = shallow(
      <Response
        allGuessses={allGuesses}
        correctAnswer={answer}
        index={correctAnswerKey}
      />
    );
    const expectedFeedbackValue = "YOU GOt IT!";
    expect(wrapper.text()).toEqual(expectedFeedbackValue);
  });

  it("Should return 'HOT' if guess is within 5 points to correct answer", () => {
    const answer = 25;
    let guess1 = { inputs: 30 };
    let guess2 = { inputs: 25 };
    let allGuesses = {};
    allGuesses["Guess#1"] = guess1;
    allGuesses["Guess#2"] = guess2;
    let answerKey = "Guess#1";
    let wrapper = shallow(
      <Response
        allGuessses={allGuesses}
        correctAnswer={answer}
        index={answerKey}
      />
    );
    const expectedFeedbackValue = "HOT";
    expect(wrapper.text()).toEqual(expectedFeedbackValue);
  });

  it("Should return 'WARM' if guess is within 15 points to correct answer", () => {
    const answer = 25;
    let guess1 = { inputs: 40 };
    let guess2 = { inputs: 25 };
    let allGuesses = {};
    allGuesses["Guess#1"] = guess1;
    allGuesses["Guess#2"] = guess2;
    let answerKey = "Guess#1";
    let wrapper = shallow(
      <Response
        allGuessses={allGuesses}
        correctAnswer={answer}
        index={answerKey}
      />
    );
    const expectedFeedbackValue = "WARM";
    expect(wrapper.text()).toEqual(expectedFeedbackValue);
  });

  it("Should return 'COLD' if guess is more than 15 points from correct answer", () => {
    const answer = 25;
    let guess1 = { inputs: 50 };
    let guess2 = { inputs: 25 };
    let allGuesses = {};
    allGuesses["Guess#1"] = guess1;
    allGuesses["Guess#2"] = guess2;
    let answerKey = "Guess#1";
    let wrapper = shallow(
      <Response
        allGuessses={allGuesses}
        correctAnswer={answer}
        index={answerKey}
      />
    );
    const expectedFeedbackValue = "COLD";
    expect(wrapper.text()).toEqual(expectedFeedbackValue);
  });
});
