import React from "react";
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import OptionsList from "../components/OptionsList";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default OptionsScreen = ({ navigation }) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <>
      <TopNavigation
        title="Options"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{ flex: 1 }}>
        <OptionsList />
      </Layout>
    </>
  );
};
