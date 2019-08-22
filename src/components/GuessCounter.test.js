import React from "react";
import { shallow } from "enzyme";

import GuessCounter from "./GuessCounter";

describe("<GuessCounter />", () => {
  it("Renders without crashing", () => {
    let guesses = {};
    shallow(<GuessCounter numberOfGuesses={guesses} />);
  });

  it("Renders the correct guess count", () => {
    let guesses = {};
    let guessIndex1 = `Guess#1`;
    let guess1 = { inputs: 5 };
    let guessIndex2 = `Guess#2`;
    let guess2 = { inputs: 55 };
    guesses[guessIndex1] = guess1;
    guesses[guessIndex2] = guess2;
    const value1 = 2;
    const wrapper = shallow(<GuessCounter numberOfGuesses={guesses} />);
    expect(wrapper.text()).toEqual(`Guess # ${value1}`);
  });
});
