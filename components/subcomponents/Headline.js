import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default function Headline() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Dashboard</Text>
        <Text style={{ fontSize: 16 }}>Friday, April 15</Text>
      </View>
      <Icon name="notifications" size={26} color={"grey"} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
