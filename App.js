import React from "react";
import Amplify from "aws-amplify";
import "mobx-react-lite/batchingForReactNative";

import awsconfig from "./aws-exports";
import AppNavigator from "./navigation/AppNavigator";
import UIProvider from "./components/UIProvider";
import StoreProvider from "./store/StoreProvider";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

export default function App() {
  return (
    <StoreProvider>
      <UIProvider>
        <AppNavigator />
      </UIProvider>
    </StoreProvider>
  );
}
