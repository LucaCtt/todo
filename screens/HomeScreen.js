import React from "react";
import { TopNavigationAction, Icon } from "@ui-kitten/components";

import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";

const OptIcon = (props) => <Icon {...props} name="settings-2-outline" />;

export default HomeScreen = ({ navigation }) => {
  const OptAction = () => (
    <TopNavigationAction
      icon={OptIcon}
      onPress={() => navigation.navigate("Options")}
    />
  );

  return (
    <Navigation title="Home" accessoryRight={OptAction}>
      <TodoList />
    </Navigation>
  );
};
