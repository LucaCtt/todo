import React, { memo } from "react";
import { View } from "react-native";
import { Spinner } from "@ui-kitten/components";

const LoadingIndicator = ({ ...props }) => (
  <View {...props}>
    <Spinner />
  </View>
);

export default memo(LoadingIndicator);
