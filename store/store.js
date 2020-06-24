import { API, graphqlOperation, Auth } from "aws-amplify";
import AsyncStorage from "@react-native-community/async-storage";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

/**
 * Creates a new theme store backed by AsyncStorage.
 */
export const createThemeStore = () => ({
  theme: "light",
  async toggleTheme() {
    const nextTheme = this.theme === "light" ? "dark" : "light";

    this.theme = nextTheme;
    await AsyncStorage.setItem("theme", this.theme);
  },

  // Read the stored theme in AsyncStorage.
  async _initialize() {
    const theme = await AsyncStorage.getItem("theme");
    if (theme) {
      this.theme = theme;
    }
  },
});

/**
 * Creates a new auth store backed by AWS Cognito.
 */
export const createAuthStore = () => ({
  user: null,
  async signIn(email, password) {
    await Auth.signIn(email, password);
  },
  async signUp(email, password) {
    await Auth.signUp(email, password);
  },
  async confirmSignUp(email, code) {
    await Auth.confirmSignUp(email, code);
  },
  async resendSignUp(email) {
    await Auth.resendSignUp(email);
  },
  async signOut() {
    await Auth.signOut();
  },
  get isLoggedIn() {
    return this.user !== null;
  },

  // Populate user info.
  async _initialize() {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      this.user = {
        email: user.attributes.email,
        confirmed: user.attributes.email_verified,
      };
    }
  },
});

/**
 * Creates a new items store backed by AWS AppSync
 */
export const createItemsStore = () => ({
  items: [],
  async addItem(text) {
    // Run graphql mutation and get the id of the created item.
    const result = await API.graphql(
      graphqlOperation(mutations.createItem, {
        input: {
          text,
          completed: false,
        },
      })
    );

    // Add item to the local list.
    this.items.push({
      id: result.data.createItem.id,
      text,
      completed: false,
    });
  },
  async toggleCompleteItem(id) {
    const item = this.items.filter((i) => i.id === id)[0];
    if (!item) {
      return;
    }

    item.completed = !item.completed;
    await API.graphql(
      graphqlOperation(mutations.updateItem, {
        input: { id, completed: item.completed },
      })
    );
  },
  async deleteItem(id) {
    this.items = this.items.filter((i) => i.id !== id);

    await API.graphql(
      graphqlOperation(mutations.deleteItem, { input: { id } })
    );
  },
  get dataSource() {
    // The items list cannot be passed down directly, because the list would not refresh
    // when an item is added or removed. This happens because the List component is not
    // an observer. To work around this problem, the slice() method is called on the items list.
    return this.items.slice();
  },

  // Get the items from the API.
  async _initialize() {
    const result = await API.graphql(graphqlOperation(queries.listItems));

    this.items.push(
      ...result.data.listItems.items.map(({ id, text, completed }) => ({
        id,
        text,
        completed,
      }))
    );
  },
});
