import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions, Animated } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutDoctorScreen from "../screens/AboutDoctorScreen";
import MedicalAppointmentScreen from "../screens/MedicalAppointmentScreen";
import ConfirmScreen from "../screens/ConfirmScreen";

const Stack = createNativeStackNavigator();

const MedicalAppointmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MedicalStack"
        component={MedicalAppointmentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cofirming"
        component={ConfirmScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function SubTabView({ doctor }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Make an appointment" },
    { key: "second", title: "About the doctor" },
  ]);

  const AboutDoctorScreenRoute = () => {
    return <AboutDoctorScreen doctor={doctor} />;
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <MedicalAppointmentStack />;
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
