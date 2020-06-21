import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";

export default FormButton = ({ style, children, ...props }) => (
  <Button {...props} style={{ ...styles.button, ...style }}>
    {children}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});
