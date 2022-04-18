import React from "react";
import reactDom from "react-dom";
import { StyleSheet, View, Text } from "react-native";

function MedicalAppointmentScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>Make an Appointment</Text>
      </View>
      <View style={styles.bookingContainer}>
        <Text style={styles.appointmentTime}>April 19th 2022, 10:00am</Text>
        <Text style={styles.changeDateContainer}>Change Date</Text>
      </View>
      <View>
        <Text style={styles.blankContainer}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginTop: 28,
  },
  headerText: {
    fontSize: 16,
    color: "gray",
    paddingLeft: 14,
  },
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 14,
    marginLeft: 14,
  },
  changeDateContainer: {
    fontSize: 14,
    color: "#CD853F",
    fontWeight: "bold",
  },
  appointmentTime: {
    fontSize: 20,
    marginBottom: 20,
  },
  blankContainer: {
    borderBottomWidth: 0.5,
    marginRight: 14,
    marginLeft: 14,
    borderBottomColor: "gray",
  },
});

export default MedicalAppointmentScreen;
