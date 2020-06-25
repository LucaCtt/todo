import React from "react";
import Amplify from "aws-amplify";
import { registerRootComponent } from "expo";
import { enableScreens } from "react-native-screens";
import "mobx-react-lite/batchingForReactNative";

import awsconfig from "../aws-exports";
import AppNavigator from "./navigation/AppNavigator";
import UIProvider from "./components/UIProvider";
import StoreProvider from "./store/StoreProvider";

enableScreens();
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const App = () => (
  <StoreProvider>
    <UIProvider>
      <AppNavigator />
    </UIProvider>
  </StoreProvider>
);

registerRootComponent(App);
