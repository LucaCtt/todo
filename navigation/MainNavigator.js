import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import OptionsScreen from "../screens/OptionsScreen";

const App = createStackNavigator();

export default MainNavigator = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Home" component={HomeScreen} />
    <App.Screen name="Options" component={OptionsScreen} />
  </App.Navigator>
);
