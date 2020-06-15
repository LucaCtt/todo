import React from "react";
import { Icon, TopNavigationAction } from "@ui-kitten/components";

import Navigation from "../components/Navigation";
import OptionsList from "../components/OptionsList";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default OptionsScreen = ({ navigation }) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <Navigation title="Options" accessoryLeft={BackAction}>
      <OptionsList />
    </Navigation>
  );
};
