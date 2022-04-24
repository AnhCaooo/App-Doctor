import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import meetings from "../consts/Meetings";

function MeetingCheckBox() {
  const [meeting, setMeeting] = useState({
    id: "",
    label: "",
  });

  return (
    <View>
      <RadioButtonRN
        data={meetings}
        boxStyle={{ borderWidth: 0 }}
        textStyle={{ fontSize: 18 }}
        circleStyle={{ size: 18 }}
        selectedBtn={(meeting) => console.log(meeting)}
        icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default MeetingCheckBox;
