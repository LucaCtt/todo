import React from "react";
import { render, fireEvent } from "test-utils";

import AuthForm from "../AuthForm";

describe("<AuthForm />", () => {
  test("matches snapshot", () => {
    const { baseElement } = render(
      <AuthForm submitText="Test" onSubmit={() => {}} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  test("onSubmit called with email and password", () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <AuthForm submitText="Submit" onSubmit={onSubmit} />
    );

    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "12345678Aa@");
    fireEvent.press(getByText("Submit"));

    expect(onSubmit.mock.calls[0]).toEqual(["test@example.com", "12345678Aa@"]);
  });

  /*
  test("onSubmit error is shown", () => {
    const onSubmit = () => {
      throw new Error("test");
    };

    const { getByText, baseElement } = render(
      <AuthForm submitText="Submit" onSubmit={onSubmit} />
    );

    fireEvent.press(getByText("Submit"));

    expect(baseElement).toContainElement(getByText("test"));
  });*/
});
