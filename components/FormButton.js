import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";

const FormButton = ({ style, children, ...props }) => (
  <Button {...props} style={[styles.button, style]}>
    {children}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

export default memo(FormButton);
