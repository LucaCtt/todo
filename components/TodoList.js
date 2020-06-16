import React from "react";
import { StyleSheet, View } from "react-native";
import { List, Divider, Card, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";

import useItems from "../hooks/useItems";
import TodoItem from "./TodoItem";
import IconButton from "../components/IconButton";

export default TodoList = observer(({ ...props }) => {
  const { items, deleteItem } = useItems();
  const navigation = useNavigation();

  const ClearButton = (props) => (
    <IconButton
      {...props}
      icon="trash"
      onPress={() =>
        items.filter((i) => i.completed).forEach((i) => deleteItem(i))
      }
    />
  );

  const NewItemButton = (props) => (
    <IconButton
      {...props}
      icon="plus"
      onPress={() => navigation.navigate("NewItem")}
    />
  );

  const Header = (props) => (
    <View {...props} style={styles.header}>
      <Text category="h6" style={styles.title}>
        TODO
      </Text>
      <View style={styles.headerButtons}>
        <ClearButton />
        <NewItemButton />
      </View>
    </View>
  );

  const ItemsList = observer((props) => {
    // The items list cannot be passed down directly, because the list would not refresh
    // when an item is added or removed. This happens because the List component is not
    // an observer. To work around this problem, the slice() method is called on the items list.
    return (
      <List
        {...props}
        keyExtractor={(item) => `${item.id}`}
        data={items.slice()}
        renderItem={({ item }) => <TodoItem item={item} />}
        ItemSeparatorComponent={Divider}
      />
    );
  });

  return (
    <Card {...props} disabled header={Header} style={styles.container}>
      <ItemsList />
    </Card>
  );
});

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButtons: {
    flexDirection: "row",
  },
  title: { paddingHorizontal: 16 },
  container: {
    margin: 14,
    paddingBottom: 0,
    flex: 1,
    flexShrink: 1,
  },
});
