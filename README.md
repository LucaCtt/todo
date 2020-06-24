# Todo List

This is a mobile app that I built to familiarize myself with the React Native ecosystem.
It's made with [Expo](https://expo.io), [AWS Amplify](https://docs.amplify.aws),
[UI Kitten](https://akveo.github.io/react-native-ui-kitten), and [MobX](https://mobx.js.org/README.html).

## Supported platforms

The app is tested on Android, but should run fine on IOS. It however does not support
web, because at the time of writing it is too unstable.

## How to run

Make sure to have a recent version of Node and npm.

First, follow the instructions listed in the
[prerequisites page of AWS Amplify](https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native#option-2-follow-the-instructions)
to install and setup the Amplify CLI.

Then, while in the project root, push the backend:

```bash
amplify push
```

Finally, to run the app locally:

```bash
# Install dependecies
npm i

# Start the Expo dev server
npm start
```

To instead build for production:

TODO

## Documentation

TODO

## License

MIT License. See the LICENSE.md file for more information.

## Author

[Luca Cotti](mailto:lucacotti@outlook.com)
