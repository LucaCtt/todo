import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";

const OptIcon = (props) => <Icon {...props} name="settings-2-outline" />;

export default HomeScreen = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  const OptAction = () => (
    <TopNavigationAction
      icon={OptIcon}
      onPress={() => navigation.navigate("Options")}
    />
  );

  return (
    <>
      <TopNavigation
        title="Home"
        alignment="center"
        accessoryRight={OptAction}
      />
      <Divider />
      <Layout style={styles.layout}>
        <Button onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: { flex: 1, justifyContent: "center", alignItems: "center" },
});
