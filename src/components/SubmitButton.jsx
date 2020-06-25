import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Spinner } from "@ui-kitten/components";

const LoadingIndicator = ({ ...props }) => (
  <View {...props} accessibilityLabel="loading">
    <Spinner />
  </View>
);

/**
 * A button that supports showing a loading animation, meant to be used to submit forms.
 *
 * @property {boolean} isLoading - Whether the loading animation should be shown. Defaults to *false*.
 */
const SubmitButton = ({ isLoading = false, style, children, ...props }) => (
  <Button
    {...props}
    accessoryLeft={isLoading ? LoadingIndicator : null}
    style={[styles.button, style]}
  >
    {isLoading ? null : children}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

export default memo(SubmitButton);
