import React from "react";
import { TopNavigationAction, Icon } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";
import NewItemButton from "../components/NewItemButton";
import useItems from "../hooks/useItems";

const OptIcon = (props) => <Icon {...props} name="settings-2-outline" />;

export default HomeScreen = observer(({ navigation }) => {
  const { items } = useItems();

  const OptAction = () => (
    <TopNavigationAction
      icon={OptIcon}
      onPress={() => navigation.navigate("Options")}
    />
  );

  const NewItem = () => (
    <NewItemButton onPress={() => navigation.navigate("NewItem")} />
  );

  return (
    <Navigation title="Home" accessoryRight={OptAction}>
      <TodoList title="TODO" items={items} Accessory={NewItem} />
    </Navigation>
  );
});
