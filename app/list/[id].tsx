import { Stack, router, useGlobalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

const DetailsPage = () => {
  const { id } = useGlobalSearchParams();

  const handle = () => {
    router.back();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{}} />
      <Text>MY DETAISL FOR: {id}</Text>
      <Button title="Voltar" onPress={handle} />
    </View>
  );
};

export default DetailsPage;
