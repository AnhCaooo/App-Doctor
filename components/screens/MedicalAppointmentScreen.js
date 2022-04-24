import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import MeetingCheckBox from "../subcomponents/MeetingCheckBox";
import ModalPopUp from "../subcomponents/ModalPopUp";

function MedicalAppointmentScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
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
          <MeetingCheckBox />
        </Card>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ModalPopUp visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Image
                  source={require("../assets/x.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/successImg.png")}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
          >
            Congratulations! Your booking was successful
          </Text>
        </ModalPopUp>

        <Button
          containerStyle={styles.button}
          title="Continue"
          onPress={() => setVisible(true)}
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
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default MedicalAppointmentScreen;
