import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppointmentScreen from "../screens/AppointmentScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Appointment" component={AppointmentScreen} />
    </Stack.Navigator>
  );
};

export default { MainStackNavigator };
