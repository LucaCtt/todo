// @expo/vector-icons is a wrapper for multiple icon packs. In this example Ionicons is used.
// Compared to the "normal" vector-icons pkg, it adds compatibility to the Expo asset system. 
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

// TabBarIcon is just an icon designed to be contained in the bottom navigation bar of the app.
// The name of the icon to render is specified through the "name" prop.
// The color of the icon changes when it is focused (specified through the "focused" prop).
export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
