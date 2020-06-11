import React from "react";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

export default HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      <TopNavigation title="Home" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button
          style={{ marginVertical: 4 }}
          onPress={themeContext.toggleTheme}
        >
          TOGGLE THEME
        </Button>
      </Layout>
    </>
  );
};
