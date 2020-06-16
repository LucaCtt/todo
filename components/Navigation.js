import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

export default Navigation = ({
  title,
  accessoryRight,
  accessoryLeft,
  children,
  ...props
}) => {
  return (
    <>
      <TopNavigation
        title={title}
        accessoryRight={accessoryRight}
        accessoryLeft={accessoryLeft}
        alignment="center"
      />
      <Divider />
      <Layout {...props} style={styles.layout}>
        <SafeAreaView style={styles.areaView}>{children}</SafeAreaView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  areaView: {
    flex: 1,
  },
});
