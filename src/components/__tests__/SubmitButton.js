import React from "react";
import { Text } from "react-native";
import { render } from "test-utils";

import SubmitButton from "../SubmitButton";

describe("<SubmitButton />", () => {
  test("matches snapshot", () => {
    const { baseElement } = render(
      <SubmitButton isLoading>
        <Text>Test</Text>
      </SubmitButton>
    );
    expect(baseElement).toMatchSnapshot();
  });

  test("Loading indicator shown while loading", () => {
    const { queryByText, getByLabelText, baseElement } = render(
      <SubmitButton isLoading>
        <Text>Test</Text>
      </SubmitButton>
    );
    expect(baseElement).toContainElement(getByLabelText("loading"));
    expect(queryByText("Test")).toBeNull();
  });

  test("Loading indicator hidden while not loading", () => {
    const { getByText, queryByLabelText, baseElement } = render(
      <SubmitButton>
        <Text>Test</Text>
      </SubmitButton>
    );
    expect(queryByLabelText("loading")).toBeNull();
    expect(baseElement).toContainElement(getByText("Test"));
  });
});
