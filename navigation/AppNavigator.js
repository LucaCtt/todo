import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NewItemScreen from "../screens/NewItemScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthNavigator from "./AuthNavigator";
import useAuthInfo from "../hooks/useAuthInfo";
import { screens } from "../constants";

const App = createStackNavigator();

export default AppNavigator = () => {
  const authInfo = useAuthInfo();
  const initial = authInfo.isLoggedIn ? screens.HOME : screens.AUTH;

  return (
    <NavigationContainer>
      <App.Navigator mode="modal" initialRouteName={initial} headerMode="none">
        <App.Screen name={screens.HOME} component={HomeScreen} />
        <App.Screen name={screens.NEW_ITEM} component={NewItemScreen} />
        <App.Screen name={screens.AUTH} component={AuthNavigator} />
      </App.Navigator>
    </NavigationContainer>
  );
};
