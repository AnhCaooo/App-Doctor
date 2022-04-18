import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions, Animated } from "react-native";

import AboutDoctorScreen from "../screens/AboutDoctorScreen";
import MedicalAppointmentScreen from "../screens/MedicalAppointmentScreen";

const renderScene = SceneMap({
  first: MedicalAppointmentScreen,
  second: AboutDoctorScreen,
});

function SubTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Make an appointment" },
    { key: "second", title: "About the doctor" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={styles.tab}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    opacity: 1,
    width: "auto",
    marginRight: 2,
  },
  tab: {
    marginTop: 30,
  },
});

export default SubTabView;
