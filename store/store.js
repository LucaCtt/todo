import { AsyncStorage } from "react-native";
import { DataStore } from "aws-amplify";
import { Item } from "../models";

export const createThemeStore = () => ({
  theme: "light",
  toggleTheme() {
    const nextTheme = this.theme === "light" ? "dark" : "light";
    this.setTheme(nextTheme);
  },
  async setTheme(theme) {
    this.theme = theme;
    AsyncStorage.setItem("theme", this.theme);
  },
});

export const createAuthInfoStore = () => ({
  isLoggedIn: false,
  setIsLoggedIn(value) {
    this.isLoggedIn = value;
  },
});

export const createItemsStore = () => ({
  items: [
    { id: 0, text: "Click the plus icon to add an item!", completed: false },
    {
      id: 1,
      text: "I'm completed! Click the trash icon to delete me!",
      completed: true,
    },
  ],
  async addItem(text) {
    const item = {
      id: this._nextItemId,
      text,
      completed: false,
    };

    this.items.push(item);
    await DataStore.save(
      new Item({
        text,
        completed: false,
      })
    );
  },
  toggleCompleteItem(id) {
    const item = this.items.filter((item) => item.id === id)[0];
    item.completed = !item.completed;
  },
  deleteItem(item) {
    this.items.remove(item);
  },

  get _nextItemId() {
    if (this.items.length === 0) {
      return 0;
    }
    return Math.max(...this.items.map((item) => item.id)) + 1;
  },
});
