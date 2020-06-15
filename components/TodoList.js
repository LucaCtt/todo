import React from "react";
import { StyleSheet, View } from "react-native";
import { List, Divider, Card, Text } from "@ui-kitten/components";

import TodoItem from "./TodoItem";

export default TodoList = ({ items, title, Accessory, ...props }) => {
  const Header = (props) => (
    <View {...props} style={styles.header}>
      <Text category="h6" style={styles.title}>
        {title}
      </Text>
      <Accessory />
    </View>
  );

  return (
    <Card disabled header={Header} style={styles.container}>
      <List
        {...props}
        data={items}
        renderItem={({ item }) => <TodoItem item={item} />}
        ItemSeparatorComponent={Divider}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    paddingHorizontal: 16,
  },
  container: {
    margin: 14,
  },
});
