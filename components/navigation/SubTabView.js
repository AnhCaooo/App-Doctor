import React, { useState } from "react";
import { TabView } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutDoctorScreen from "../screens/AboutDoctorScreen";
import MedicalAppointmentScreen from "../screens/MedicalAppointmentScreen";

const Stack = createNativeStackNavigator();

function SubTabView({ doctor }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Make an appointment" },
    { key: "second", title: "About the doctor" },
  ]);

  const MedicalAppointmentRoute = () => {
    return <MedicalAppointmentScreen doctor={doctor} />;
  };
  const AboutDoctorScreenRoute = () => {
    return <AboutDoctorScreen doctor={doctor} />;
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <MedicalAppointmentRoute />;
      case "second":
        return <AboutDoctorScreenRoute />;
      default:
        return null;
    }
  };

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
