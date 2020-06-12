import { useContext } from "react";

import ThemeContext from "../kitten/ThemeContext";

export default useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return [theme, toggleTheme];
};
