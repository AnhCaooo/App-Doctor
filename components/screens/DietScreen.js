import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function DietScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is DietScreen</Text>
      <Button
        title="Go to appointment"
        onPress={() => console.log("this is diet screen")}
      />
    </View>
  );
}

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
