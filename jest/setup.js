// React native jest matchers.
import "@testing-library/jest-native/extend-expect";

// Fixes the following error when testing a component that used animations:
// Animated: `useNativeDriver` is not supported because the native animated module is missing.
// Falling back to JS-based animation.
// To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`.
// More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

// Fixes jest not exiting when testing a component that uses animations.
jest.useFakeTimers();
