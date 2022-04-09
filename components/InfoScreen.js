import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function InfoScreen() {
  return (
    <View>
      <Text>This is InfoScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
