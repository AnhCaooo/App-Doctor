import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { CheckBox, Card, Icon, Button } from "react-native-elements";

function MedicalAppointmentScreen({ navigation }) {
  const [audioChat, setAudioChat] = useState(false);
  const [videoConference, setVideoConference] = useState(false);
  const [contactMeeting, setContactMeeting] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>Make an Appointment</Text>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={styles.appointmentTime}>April 19th 2022, 10:00am</Text>
        <Text style={styles.changeDateContainer}>Change Date</Text>
      </View>

      <View style={styles.panel}>
        <Card containerStyle={styles.card}>
          <CheckBox
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
            textStyle={styles.textStyle}
            title="Audio Chat"
            checkedIcon={
              <Icon name="check-circle" type="feather" color="grey" size={22} />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={22}
              />
            }
            checked={audioChat}
            onPress={() => setAudioChat(!audioChat)}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            textStyle={styles.textStyle}
            title="Video Conference"
            checkedIcon={
              <Icon name="check-circle" type="feather" color="grey" size={22} />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={22}
              />
            }
            checked={videoConference}
            onPress={() => setVideoConference(!videoConference)}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            textStyle={styles.textStyle}
            title="Contact Meeting"
            checkedIcon={
              <Icon name="check-circle" type="feather" color="grey" size={22} />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={22}
              />
            }
            checked={contactMeeting}
            onPress={() => setContactMeeting(!contactMeeting)}
          />
        </Card>
      </View>

      <View style={styles.button}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("Cofirming")}
        />
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
  panel: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 70,
  },
  card: {
    width: Dimensions.get("window").width,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: "transparent",
  },
  textStyle: {
    fontWeight: "normal",
    fontSize: 16,
  },
  button: {
    right: 20,
    left: 20,
    bottom: 20,
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: "#1E90FF",
  },
});

export default MedicalAppointmentScreen;
