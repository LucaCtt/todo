import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, TopNavigation } from "@ui-kitten/components";

export default Navigation = ({ children, ...props }) => {
  return (
    <>
      <TopNavigation {...props} alignment="center" />
      <Divider />
      <Layout style={styles.layout}>{children}</Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
