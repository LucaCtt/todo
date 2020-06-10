// The bottom navigation bar is created by react-navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

// The Home and Links screens are imported and rendered in this component.
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // The route is an object representing the child route, not the parent!
  // In this case it represents the navigation state of the bottom tab navigator.

  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //
  // An alternative to doing this would be creating another stack navigator inside
  // each of the routes in the bottom tab navigator, but this would cause code repetition.
  //
  // This also uses React.useLayoutEffect to avoid setting the header if neither the navigation 
  // or the route have changed. The difference between useLayoutEffect and useEffect is that
  // useLayoutEffect is run synchronously after the component renders, which avoids rendering flickers.
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);


  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  // Get current bottom tab route name if defined, otherwise default to initial route.
  // This is necessary because the route state is not set on startup, but only after the first navigation.
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
