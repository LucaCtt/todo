import { useState, useLayoutEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import store from "../store";

/**
 * Returns the name of the current theme, and a function to toggle it between light and dark.
 *
 * The initial value is read from the store, and each toggle updates the value in the store.
 *
 * Note that the stored value is read only the first time, which means that if this hook is used in multiple
 * places where the toggleTheme() function is called, the hooks will have inconsistent state.
 * @param {string} initial The initial theme, one of "light" and "dark". Will be overwritten by the one
 *                         in the store, if it exists.
 */
export default useThemeStore = (initial) => {
  const [theme, setTheme] = useState(initial);

  useLayoutEffect(() => {
    const getTheme = async () => {
      const storedTheme = await store.getAsync("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };

    getTheme();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    store.setAsync("theme", nextTheme);
  };

  return [theme, toggleTheme];
};
