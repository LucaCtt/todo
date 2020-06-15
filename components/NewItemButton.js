import React from "react";
import { Button, Icon } from "@ui-kitten/components";

const AddButton = (props) => <Icon {...props} name="plus" />;

export default NewItemButton = ({ onPress, ...props }) => (
  <Button
    {...props}
    appearance="ghost"
    accessoryLeft={AddButton}
    onPress={onPress}
  />
);
