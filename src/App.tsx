import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import { Play_400Regular, Play_700Bold } from "@expo-google-fonts/play";
import * as SplashScreen from "expo-splash-screen";

import theme from "./styles/theme";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
    Play_400Regular,
    Play_700Bold,
  });
  useEffect(() => {
    async function prepare(): Promise<void> {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent />
      <View onLayout={onLayoutRootView} />
    </ThemeProvider>
  );
};

export default App;
