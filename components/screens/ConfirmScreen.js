import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function ConfirmScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is ConfirmScreen</Text>
      <Button
        title="Please check again your information before submit your appointment"
        onPress={() => console.log("this is ConfirmScreen")}
      />
    </View>
  );
}

export default ConfirmScreen;

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
