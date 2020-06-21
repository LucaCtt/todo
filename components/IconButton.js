import React, { memo } from "react";
import { Button, Icon } from "@ui-kitten/components";

const IconButton = ({ icon, ...props }) => (
  <Button
    appearance="ghost"
    {...props}
    accessoryLeft={(props) => <Icon {...props} name={icon} />}
  />
);

export default memo(IconButton);
