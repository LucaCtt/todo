import React from "react";
import { Toggle } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import { useStore } from "../hooks/useStore";

export default ThemeToggle = observer(() => {
  const store = useStore();
  return (
    <Toggle checked={store.theme === "dark"} onChange={store.toggleTheme} />
  );
});
