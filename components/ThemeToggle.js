import React from "react";
import { Toggle } from "@ui-kitten/components";

import useTheme from "../hooks/useTheme";

export default ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  return <Toggle checked={theme === "dark"} onChange={toggleTheme} />;
};
