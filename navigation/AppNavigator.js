import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NewItemScreen from "../screens/NewItemScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthNavigator from "./AuthNavigator";
import useAuthInfo from "../hooks/useAuthInfo";

const App = createStackNavigator();

export default AppNavigator = () => {
  const authInfo = useAuthInfo();

  const initial = authInfo.isLoggedIn ? "Home" : "Auth";

  return (
    <NavigationContainer>
      <App.Navigator mode="modal" initialRouteName={initial} headerMode="none">
        <App.Screen name="Home" component={HomeScreen} />
        <App.Screen name="NewItem" component={NewItemScreen} />
        <App.Screen name="Auth" component={AuthNavigator} />
      </App.Navigator>
    </NavigationContainer>
  );
};
