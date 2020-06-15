import React from "react";
import { Divider, List, ListItem } from "@ui-kitten/components";

import ThemeToggle from "./ThemeToggle";

const data = [{ title: "Dark theme", accessory: ThemeToggle }];

export default OptionsList = (props) => {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} accessoryRight={item.accessory} />
  );

  return (
    <List
      {...props}
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};
