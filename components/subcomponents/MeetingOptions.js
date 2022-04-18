import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

function MeetingOptions() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox title="Click Here" checked={!check1} />
      <CheckBox
        center
        title="Audio Chat"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />
      <CheckBox
        center
        title="Video Conference"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      <CheckBox
        center
        title="Contact Meeting"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default MeetingOptions;
