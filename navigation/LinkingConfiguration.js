import * as Linking from 'expo-linking';

// This is the config for deep linking, which allows to open a particular "page" of the app
// from an URI (like todo://home/create).
// See https://reactnavigation.org/docs/deep-linking https://reactnavigation.org/docs/configuring-links
//
// The prefix is created with the makeUrl API so that it has to be configured only in the app.json file,
// and it will also defaul to the expo URI during development.
//
// This could also handle URls like http://todo.com/create, by adding another prefix to the prefixes array.
//
// With this config, the url /root will be handled by the screen named Root.
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Links: 'links',
      },
    },
  },
};
