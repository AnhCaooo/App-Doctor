import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'radi... Remove this comment to see the full error message
import RadioButtonRN from "radio-buttons-react-native";
import { format } from "date-fns";
// @ts-expect-error TS(2307): Cannot find module '../subcomponents/ModalPopUp' o... Remove this comment to see the full error message
import ModalPopUp from "../subcomponents/ModalPopUp";
// @ts-expect-error TS(2307): Cannot find module '../consts/Meetings' or its cor... Remove this comment to see the full error message
import meetings from "../consts/Meetings";
import DateTimePicker from "@react-native-community/datetimepicker";
import { auth, db } from "../../firebase";

function MedicalAppointmentScreen({
  navigation,
  doctor
}: any) {
  const [appointment, setAppointment] = useState({
    doctor: `${doctor.firstname} ${doctor.lastname}`,
    date: new Date(),
    meeting: "",
  });
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setAppointment({ ...appointment, date: currentDate });
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [visible, setVisible] = useState(false);

  const saveAppointments = (appointment: any) => {
    db.ref("appointments/" + auth.currentUser?.uid).push({
      ...appointment,
      date: format(appointment.date, "EEEE, MMM dd HH:mm aaa"),
    });
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.bookingContainer}>
        <View>
          <Text style={styles.headerText}>Make an Appointment</Text>
          <Text style={styles.appointmentTime}>
            {format(appointment.date, "EEE, MMM dd HH:mm aaa")}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            type="clear"
            onPress={showDatepicker}
            title="Change Date"
            titleStyle={styles.changeDateContainer}
          />
          <Button
            type="clear"
            onPress={showTimepicker}
            title="Change Time"
            titleStyle={styles.changeDateContainer}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={appointment.date}
              // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'AndroidMo... Remove this comment to see the full error message
              mode={mode}
              is24Hour={true}
              themeVariant="light"
              onChange={onChange}
            />
          )}
        </View>
      </View>

      <View style={styles.panel}>
        // @ts-expect-error TS(2322): Type '{ children: Element; containerStyle: { width... Remove this comment to see the full error message
        <Card containerStyle={styles.card}>
          <RadioButtonRN
            data={meetings}
            boxStyle={{ borderWidth: 0 }}
            textStyle={{ fontSize: 18 }}
            circleStyle={{ size: 18 }}
            selectedBtn={(meeting: any) => setAppointment({ ...appointment, meeting: meeting.label })
            }
            // @ts-expect-error TS(2741): Property 'tvParallaxProperties' is missing in type... Remove this comment to see the full error message
            icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
          />
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
          title="Book"
          onPress={() => {
            setVisible(true);
            saveAppointments(appointment);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginTop: 18,
  },
  headerText: {
    fontSize: 18,
    color: "gray",
  },
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 14,
    marginLeft: 20,
  },
  changeDateContainer: {
    fontSize: 16,
    color: "#CD853F",
  },
  appointmentTime: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  panel: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 80,
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
