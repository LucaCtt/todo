import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NewItemScreen from "../screens/NewItemScreen";
import HomeScreen from "../screens/HomeScreen";

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
      <App.Screen name="Home" component={HomeScreen} />
      <App.Screen name="NewItem" component={NewItemScreen} />
    </App.Navigator>
  </NavigationContainer>
);
