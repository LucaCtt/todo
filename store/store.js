import { AsyncStorage } from "react-native";
import { DataStore, Auth } from "aws-amplify";
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

export const createAuthStore = () => ({
  user: null,
  async signInAsync(email, password) {
    await Auth.signIn(email, password);
    this.setIsLoggedIn(true);
  },
  async signUpAsync(email, password) {
    await Auth.signUp(email, password);
  },
  async confirmSignUpAsync(email, code) {
    await Auth.confirmSignUp(email, code);
  },
  async resendSignUpAsync(email) {
    await Auth.resendSignUp(email);
  },
  async signOutAsync() {
    await Auth.signOut();
  },
  get isLoggedIn() {
    return this.user !== null;
  },

  async initializeAsync() {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      this.user = {
        email: user.attributes.email,
        confirmed: user.attributes.email_verified,
      };
    }
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
