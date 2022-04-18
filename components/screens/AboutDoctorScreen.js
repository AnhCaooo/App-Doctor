import React from "react";
import { StyleSheet, View, Text } from "react-native";

function AboutDoctorScreen({ navigation, doctor }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Doctor's greeting</Text>
      <Text style={styles.greetingText}>{doctor.greeting}</Text>
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
  greetingText: {
    fontSize: 18,
    marginRight: 14,
    marginLeft: 14,
    marginBottom: 20,
  },
  blankContainer: {
    borderBottomWidth: 0.5,
    marginRight: 14,
    marginLeft: 14,
    borderBottomColor: "gray",
  },
});

export default AboutDoctorScreen;
