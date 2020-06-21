import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

const FormInput = ({ style, ...props }) => (
  <Input size="large" {...props} style={[styles.input, style]} />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 6,
  },
});

export default memo(FormInput);
