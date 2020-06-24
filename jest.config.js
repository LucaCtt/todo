const expoPreset = require("jest-expo/jest-preset");
const jestPreset = require("@testing-library/react-native/jest-preset");

module.exports = {
  ...expoPreset,
  ...jestPreset,
  setupFiles: [...expoPreset.setupFiles, ...jestPreset.setupFiles],
  setupFilesAfterEnv: [
    "@testing-library/react-native/cleanup-after-each",
    "./jest/setup.js",
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "./jest"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js,jsx}"],
};
