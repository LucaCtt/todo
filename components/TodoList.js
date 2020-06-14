import React from "react";
import { StyleSheet, View } from "react-native";
import { List, Divider, Card, Text } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import TodoItem from "./TodoItem";
import NewItemButton from "./NewItemButton";

import useItems from "../hooks/useItems";

export default TodoList = observer(({ style }) => {
  const { items, toggleComplete: toggle } = useItems();
  const data = items.map((item) => ({
    text: item.text,
    completed: item.completed,
    toggleComplete: () => toggle(item.id),
  }));

  const Header = (props) => (
    <View {...props} style={styles.header}>
      <Text category="h6" style={styles.title}>
        TODO
      </Text>
      <NewItemButton />
    </View>
  );

  return (
    <Card disabled header={Header} style={{ ...styles.container, ...style }}>
      <List
        data={data}
        renderItem={TodoItem}
        ItemSeparatorComponent={Divider}
      />
    </Card>
  );
});

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    paddingHorizontal: 20,
  },
  container: {
    margin: 16,
    paddingVertical: 0,
  },
});
