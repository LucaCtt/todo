import React from "react";
import { TopNavigationAction, Icon } from "@ui-kitten/components";
import { withAuthenticator } from "aws-amplify-react-native";

import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";
import useTheme from "../hooks/useTheme";
import { observer } from "mobx-react-lite";

const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
const LightIcon = (props) => <Icon {...props} name="sun-outline" />;

const HomeScreen = observer(({ navigation }) => {
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

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
  ],
};
export default withAuthenticator(HomeScreen, {
  signUpConfig,
  usernameAttributes: "email",
});
