import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function AppointmentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is AppointmentScreen</Text>
      <Button title="Go to diet" onPress={() => navigation.navigate("Diet")} />
    </View>
  );
}

export default AppointmentScreen;

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
