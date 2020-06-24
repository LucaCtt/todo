import React from "react";
import { StyleSheet, View } from "react-native";
import { List, Divider, Card, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";

import useItems from "../hooks/useItems";
import TodoItem from "./TodoItem";
import IconButton from "../components/IconButton";
import { screens } from "../constants";

const TodoList = ({ ...props }) => {
  const itemsStore = useItems();
  const navigation = useNavigation();

  const ClearButton = observer((props) => (
    <IconButton
      {...props}
      icon="trash"
      onPress={() =>
        itemsStore.items
          .filter((i) => i.completed)
          .forEach((i) => itemsStore.deleteItem(i.id))
      }
    />
  ));

  const NewItemButton = (props) => (
    <IconButton
      {...props}
      icon="plus"
      onPress={() => navigation.navigate(screens.NEW_ITEM)}
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

  return (
    <Card {...props} disabled header={Header} style={styles.container}>
      <List
        keyExtractor={(item) => item.id}
        data={itemsStore.dataSource}
        renderItem={({ item }) => <TodoItem item={item} />}
        ItemSeparatorComponent={Divider}
      />
    </Card>
  );
};

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

export default observer(TodoList);
