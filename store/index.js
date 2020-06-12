import { AsyncStorage } from "react-native";

/**
 * Reads the item in the store identified by the given id.
 * @param {string} id The id of the item to get.
 */
const getAsync = async (id) => {
  try {
    const theme = await AsyncStorage.getItem(id);
    return theme;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Writes the item to the store with the given id.
 * @param {string} id The id of the item to write.
 * @param {string} value The id of the item to write.
 */
const setAsync = async (id, value) => {
  try {
    await AsyncStorage.setItem(id, value);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Store represents a generic store from which data can be read and written to.
 * Currently it's just a thin wrapper around AsyncStorage. To also support web
 * this should be extended to include LocalStorage.
 */
export default store = {
  getAsync,
  setAsync,
};
