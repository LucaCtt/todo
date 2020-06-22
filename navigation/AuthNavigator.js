import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmUserScreen from "../screens/ConfirmUserScreen";

const Auth = createStackNavigator();

export default AuthNavigator = () => (
  <Auth.Navigator initialRouteName="SignIn" headerMode="none">
    <Auth.Screen name="SignIn" component={SignInScreen} />
    <Auth.Screen name="SignUp" component={SignUpScreen} />
    <Auth.Screen name="ConfirmUser" component={ConfirmUserScreen} />
  </Auth.Navigator>
);
