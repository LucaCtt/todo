import React from "react";
import { TopNavigationAction, Icon } from "@ui-kitten/components";

import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";
import useTheme from "../hooks/useTheme";
import { observer } from "mobx-react-lite";
import { screens } from "../constants";

const UserIcon = (props) => <Icon {...props} name="person" />;
const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
const LightIcon = (props) => <Icon {...props} name="sun-outline" />;

export default HomeScreen = observer(({ navigation }) => {
  const themeStore = useTheme();

  const UserAction = () => (
    <TopNavigationAction
      icon={UserIcon}
      onPress={() => navigation.navigate(screens.USER_INFO)}
    />
  );

  const ThemeAction = () => (
    <TopNavigationAction
      icon={themeStore.theme === "dark" ? LightIcon : DarkIcon}
      onPress={() => themeStore.toggleTheme()}
    />
  );

  return (
    <Navigation
      title="Home"
      accessoryLeft={UserAction}
      accessoryRight={ThemeAction}
    >
      <TodoList />
    </Navigation>
  );
});
