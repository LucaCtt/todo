import React from "react";
import { render } from "test-utils";

import SubmitButton from "../SubmitButton";

describe("<SubmitButton />", () => {
  test("has 1 child", () => {
    const { baseElement } = render(<SubmitButton isLoading />);
    expect(baseElement).toMatchSnapshot();
  });
});
