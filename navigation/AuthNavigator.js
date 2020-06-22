import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmUserScreen from "../screens/ConfirmUserScreen";
import { screens } from "../constants";

const Auth = createStackNavigator();

export default AuthNavigator = () => (
  <Auth.Navigator initialRouteName={screens.SIGN_IN} headerMode="none">
    <Auth.Screen name={screens.SIGN_IN} component={SignInScreen} />
    <Auth.Screen name={screens.SIGN_UP} component={SignUpScreen} />
    <Auth.Screen name={screens.CONFIRM_USER} component={ConfirmUserScreen} />
  </Auth.Navigator>
);
