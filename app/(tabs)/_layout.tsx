import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false, headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="list" />
    </Tabs>
  );
};
