import React from "react";
import { shallow } from "enzyme";

import Game from "./Game";

describe("<Game />", () => {
  it("Renders without crashing", () => {
    shallow(<Game />);
  });
});
