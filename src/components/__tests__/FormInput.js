import React from "react";
import { render } from "test-utils";

import FormInput from "../FormInput";

describe("<FormInput />", () => {
  test("matches snapshot", () => {
    const { baseElement } = render(<FormInput />);
    expect(baseElement).toMatchSnapshot();
  });
});
