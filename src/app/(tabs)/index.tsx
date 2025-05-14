import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-3xl text-red-500">Welcome Xander Billa</Text>
      <StatusBar style="auto" />
    </View>
  );
}
