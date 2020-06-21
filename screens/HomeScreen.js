import React from "react";
import { TopNavigationAction, Icon } from "@ui-kitten/components";

import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";
import useTheme from "../hooks/useTheme";
import { observer } from "mobx-react-lite";

const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
const LightIcon = (props) => <Icon {...props} name="sun-outline" />;

export default HomeScreen = observer(({ navigation }) => {
  const { theme, toggleTheme } = useTheme();

  const ThemeAction = () => (
    <TopNavigationAction
      icon={theme === "dark" ? LightIcon : DarkIcon}
      onPress={() => toggleTheme()}
    />
  );

  return (
    <Navigation title="Home" accessoryRight={ThemeAction}>
      <TodoList />
    </Navigation>
  );
});
