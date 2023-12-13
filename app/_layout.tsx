import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false, headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
