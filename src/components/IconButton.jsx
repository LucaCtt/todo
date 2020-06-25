import React, { memo } from "react";
import { Button, Icon } from "@ui-kitten/components";

/**
 * A button that shows an icon as its content.
 *
 * @property {string} icon - The name of the icon to show.
 */
const IconButton = ({ icon, ...props }) => (
  <Button
    appearance="ghost"
    {...props}
    accessoryLeft={(props) => <Icon {...props} name={icon} testID="icon" />}
  />
);

export default memo(IconButton);
