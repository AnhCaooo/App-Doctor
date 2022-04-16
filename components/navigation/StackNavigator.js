import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppointmentScreen from "../screens/AppointmentScreen";
import HomeScreen from "../screens/HomeScreen";
import DietScreen from "../screens/DietScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Appointment" component={AppointmentScreen} />
      <Stack.Screen name="Diet" component={DietScreen} />
    </Stack.Navigator>
  );
};

export default { MainStackNavigator };
