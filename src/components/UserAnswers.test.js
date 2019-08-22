import React from "react";
import { shallow } from "enzyme";

import UserAnswers from "./UserAnswers";

describe("<UserAnswers />", () => {
  it("Renders without crashing", () => {
    let guesses = {};
    shallow(<UserAnswers answers={guesses} />);
  });

  it("Renders the correct UserAnswers", () => {
    let guessValue = "55";
    let guess = { inputs: guessValue };
    const wrapper = shallow(<UserAnswers answers={guess} />);
    expect(wrapper.text()).toEqual(guessValue);
  });
});
