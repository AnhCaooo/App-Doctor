import React from "react";
import { StyleSheet, View, Text } from "react-native";

function AboutDoctorScreen({ navigation, route }) {
  const doctor = route.params;
  console.log(doctor);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Doctor's greeting</Text>
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
});

export default AboutDoctorScreen;
