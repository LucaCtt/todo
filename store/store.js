import { AsyncStorage } from "react-native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { useLocalStore } from "mobx-react-lite";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

/**
 * Creates a new theme store backed by AsyncStorage.
 */
const createThemeStore = () => ({
  theme: "light",
  async toggleTheme() {
    const nextTheme = this.theme === "light" ? "dark" : "light";

    this.setTheme(nextTheme);
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
const createAuthStore = () => ({
  user: null,
  async signIn(email, password) {
    await Auth.signIn(email, password);
    this.setIsLoggedIn(true);
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
const createItemsStore = () => ({
  items: [],
  async addItem(text) {
    const item = {
      text,
      completed: false,
    };

    const {
      data: { createItem },
    } = await API.graphql(
      graphqlOperation(mutations.createItem, { input: item })
    );

    this.items.push({
      id: createItem.id,
      text: createItem.text,
      completed: createItem.completed,
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
  async clearCompleted() {
    const toDelete = this.items.filter((i) => i.completed);
    toDelete.forEach(
      async ({ id }) =>
        await API.graphql(
          graphqlOperation(mutations.deleteItem, { input: { id } })
        )
    );

    this.items = this.items.filter((i) => !i.completed);
  },

  // Get the items from the API.
  async _initialize() {
    const {
      data: {
        listItems: { items },
      },
    } = await API.graphql(graphqlOperation(queries.listItems));

    items
      .map(({ id, text, completed }) => ({ id, text, completed }))
      .forEach((i) => this.items.push(i));
  },
});

/**
 * Creates a new store container, which wraps the various stores.
 *
 * The *initialize()* method should be called (ideally at startup) to
 * initialize the stores.
 */
export default createStore = () => ({
  authStore: useLocalStore(createAuthStore),
  itemsStore: useLocalStore(createItemsStore),
  themeStore: useLocalStore(createThemeStore),

  // The order here is actually not important: all the auth information
  // is automatically initialized and handled by the AWS Amplify package.
  async initialize() {
    await this.authStore._initialize();
    await this.itemsStore._initialize();
    await this.themeStore._initialize();
  },
});
