import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmUserScreen from "../screens/ConfirmUserScreen";
import { screens } from "../constants";

const Auth = createNativeStackNavigator();

export default AuthNavigator = () => (
  <Auth.Navigator
    initialRouteName={screens.SIGN_IN}
    screenOptions={{ headerShown: false }}
  >
    <Auth.Screen name={screens.SIGN_IN} component={SignInScreen} />
    <Auth.Screen name={screens.SIGN_UP} component={SignUpScreen} />
    <Auth.Screen name={screens.CONFIRM_USER} component={ConfirmUserScreen} />
  </Auth.Navigator>
);
