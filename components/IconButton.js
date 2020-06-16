import React from "react";
import { Button, Icon } from "@ui-kitten/components";

export default IconButton = ({ icon, ...props }) => (
  <Button
    {...props}
    appearance="ghost"
    accessoryLeft={(props) => <Icon {...props} name={icon} />}
  />
);
