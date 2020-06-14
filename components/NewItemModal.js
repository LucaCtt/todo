import React, { useState } from "react";
import { Button, Card, Modal, Text, Input } from "@ui-kitten/components";

import useItems from "../hooks/useItems";

export default NewItemModal = ({ visible, setVisible }) => {
  const [text, setText] = useState("");
  const { add } = useItems();

  return (
    <Modal visible={visible} onBackdropPress={() => setVisible(false)}>
      <Card disabled={true}>
        <Text>Add new item</Text>
        <Input
          multiline
          size="large"
          placeholder="Type here..."
          onChangeText={setText}
        />
        <Button
          onPress={() => {
            setVisible(false);
            add(text);
          }}
        >
          <Text>Add</Text>
        </Button>
      </Card>
    </Modal>
  );
};
