import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, CheckBox, Text } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import useItems from "../hooks/useItems";

const TodoItem = ({ item, ...props }) => {
  const itemsStore = useItems();

  const Left = observer((props) => (
    <CheckBox
      {...props}
      checked={item.completed}
      onChange={() => itemsStore.toggleCompleteItem(item.id)}
      style={styles.checkBox}
    />
  ));

  const Description = observer((props) => (
    <Text
      {...props}
      style={
        item.completed ? { ...styles.text, ...styles.textBarred } : styles.text
      }
    >
      {item.text}
    </Text>
  ));

  return (
    <ListItem
      {...props}
      onPress={() => itemsStore.toggleCompleteItem(item.id)}
      title={(props) => <Description {...props} />}
      accessoryLeft={Left}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    paddingHorizontal: 20,
  },
  textBarred: {
    textDecorationLine: "line-through",
  },
  checkBox: {
    paddingLeft: 4,
  },
});

export default observer(TodoItem);
