import React, { useContext } from "react";
import { Toggle } from "@ui-kitten/components";

export default ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <Toggle checked={theme === "dark"} onChange={() => toggleTheme()} />;
};
