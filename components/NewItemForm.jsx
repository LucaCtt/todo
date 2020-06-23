import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

export default NewItemForm = ({ text, setText }) => {
  return (
    <Input
      style={styles.form}
      textStyle={styles.text}
      multiline
      autoFocus
      placeholder="Type here..."
      value={text}
      onChangeText={setText}
    />
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 14,
    padding: 10,
  },
  text: {
    paddingVertical: 6,
    textAlignVertical: "top",
    minHeight: 86,
  },
});
