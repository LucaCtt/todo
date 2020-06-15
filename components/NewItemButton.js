import React, { useState } from "react";
import { Button, Icon } from "@ui-kitten/components";

import NewItemModal from "./NewItemModal";

const AddButton = (props) => <Icon {...props} name="plus" />;

export default NewItemButton = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        {...props}
        appearance="ghost"
        accessoryLeft={AddButton}
        onPress={() => setVisible(true)}
      />
      <NewItemModal visible={visible} setVisible={setVisible} />
    </>
  );
};
