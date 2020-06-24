import React from "react";
import { render } from "@testing-library/react-native";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

const TestProvider = ({ children }) => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={eva.mapping} theme={eva.light}>
      {children}
    </ApplicationProvider>
  </>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
