import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Button } from "react-native-elements";

function AppointmentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={{ fontSize: 16 }}>
          Here is your appointment information
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Cancel Appointment"
            onPress={() => console.log("cancel this appointment")}
          />
        </View>
      </View>
    </View>
  );
}

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
  },
  header: {
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subHeader: {
    marginLeft: 20,
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: Dimensions.get("window").width * 0.9,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: "#1E90FF",
  },
});
