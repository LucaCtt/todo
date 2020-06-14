import React from "react";
import { ListItem, CheckBox, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default TodoItem = ({ item: { text, completed, toggleComplete } }) => {
  const Left = () => (
    <CheckBox
      checked={completed}
      onChange={toggleComplete}
      style={styles.checkBox}
    />
  );

  return (
    <ListItem
      onPress={toggleComplete}
      title={(evaProps) => (
        <Text
          {...evaProps}
          style={
            completed ? { ...styles.text, ...styles.textBarred } : styles.text
          }
        >
          {text}
        </Text>
      )}
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
});
