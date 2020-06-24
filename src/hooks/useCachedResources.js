import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

import useStore from "./useStore";

// This hook is used to load the assets required for the app (fonts in this case) during
// the startup of the app, before the splash screen is hidden.
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const store = useStore();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          OpenSans: require("../../assets/fonts/OpenSans-Regular.ttf"),
        });

        await store.initialize();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, [store]);

  return isLoadingComplete;
}
