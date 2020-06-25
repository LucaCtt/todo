import React from "react";
import { render } from "test-utils";

import IconButton from "../IconButton";

describe("<IconButton />", () => {
  test("matches snapshot", () => {
    const { baseElement } = render(<IconButton icon="person" />);
    expect(baseElement).toMatchSnapshot();
  });

  test("has icon", () => {
    const { getByTestId, baseElement } = render(<IconButton icon="person" />);
    expect(baseElement).toContainElement(getByTestId("icon"));
  });
});
