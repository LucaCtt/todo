import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NewItemScreen from "../screens/NewItemScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthNavigator from "./AuthNavigator";
import UserInfoScreen from "../screens/UserInfoScreen";
import useAuth from "../hooks/useAuth";
import { screens } from "../constants";

const App = createStackNavigator();

export default AppNavigator = () => {
  const auth = useAuth();
  const initial = auth.isLoggedIn ? screens.HOME : screens.AUTH;

  return (
    <NavigationContainer>
      <App.Navigator mode="modal" initialRouteName={initial} headerMode="none">
        <App.Screen name={screens.HOME} component={HomeScreen} />
        <App.Screen name={screens.NEW_ITEM} component={NewItemScreen} />
        <App.Screen name={screens.AUTH} component={AuthNavigator} />
        <App.Screen name={screens.USER_INFO} component={UserInfoScreen} />
      </App.Navigator>
    </NavigationContainer>
  );
};