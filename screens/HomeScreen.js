import React from "react";
import { StyleSheet } from "react-native";
import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";

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
    <>
      <TopNavigation
        title="Home"
        alignment="center"
        accessoryRight={OptAction}
      />
      <Divider />
      <Layout style={styles.layout}>
        <TodoList />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: { flex: 1 },
});
