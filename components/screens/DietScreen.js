import React from "react";
import { View, Text } from "react-native";

export default function DietScreen({ navigation }) {
  return (
    <View>
      <Text>This is DietScreen</Text>
      <Button
        title="Go to diet"
        onPress={() => navigation.navigate("Appointment")}
      />
    </View>
  );
}
