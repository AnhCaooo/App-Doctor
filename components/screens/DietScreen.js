import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function DietScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is DietScreen</Text>
      <Button
        title="Go to appointment"
        onPress={() => navigation.navigate("Appointment")}
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
