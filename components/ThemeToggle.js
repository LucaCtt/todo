import React from "react";
import { Toggle } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import useTheme from "../hooks/useTheme";

export default ThemeToggle = observer(() => {
  const [theme, toggleTheme] = useTheme();
  return <Toggle checked={theme === "dark"} onChange={toggleTheme} />;
});
