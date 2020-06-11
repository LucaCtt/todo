import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import OptionsScreen from "../screens/OptionsScreen";

const App = createStackNavigator();

export default AppNavigator = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home" headerMode="none">
      <App.Screen name="Home" component={HomeScreen} />
      <App.Screen name="Options" component={OptionsScreen} />
    </App.Navigator>
  </NavigationContainer>
);
