import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function ConfirmScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Please check again your information before submit your appointment
      </Text>
      <Button
        title="Back"
        onPress={() => navigation.navigate("MedicalStack")}
      />
      <Button
        title="Submit"
        onPress={() => console.log("Your appointment is submitted")}
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
