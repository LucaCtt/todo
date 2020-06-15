import React, { useState } from "react";
import { Icon, TopNavigationAction } from "@ui-kitten/components";

import Navigation from "../components/Navigation";
import NewItemForm from "../components/NewItemForm";
import useItems from "../hooks/useItems";

const CloseIcon = (props) => <Icon {...props} name="close" />;
const ConfirmIcon = (props) => <Icon {...props} name="checkmark" />;

export default NewItemScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const { addItem } = useItems();

  const CloseAction = () => (
    <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />
  );

  const ConfirmAction = () => (
    <TopNavigationAction
      icon={ConfirmIcon}
      onPress={() => {
        addItem(text);
        navigation.goBack();
      }}
    />
  );

  return (
    <Navigation
      title="New Item"
      accessoryLeft={CloseAction}
      accessoryRight={ConfirmAction}
    >
      <NewItemForm text={text} setText={setText} />
    </Navigation>
  );
};
