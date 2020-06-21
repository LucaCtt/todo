import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

export default FormInput = ({ style, ...props }) => (
  <Input size="large" {...props} style={{ ...styles.input, ...style }} />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
});
