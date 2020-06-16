import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainNavigator from "./MainNavigator";
import NewItemScreen from "../screens/NewItemScreen";

const App = createStackNavigator();

export default AppNavigator = () => (
  <NavigationContainer>
    <App.Navigator
      mode="modal"
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Main" component={MainNavigator} />
      <App.Screen name="NewItem" component={NewItemScreen} />
    </App.Navigator>
  </NavigationContainer>
);
