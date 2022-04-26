import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import AppointmentScreen from "../screens/AppointmentScreen";
import BookingScreen from "../screens/BookingScreen";
import DietScreen from "../screens/DietScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          title: "Book Appointment",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "md-home-outline";
          } else if (route.name === "Appointment") {
            iconName = "md-calendar-outline";
          } else if (route.name === "Diet") {
            iconName = "md-restaurant-outline";
          } else if (route.name === "Profile") {
            iconName = "md-person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#216afc",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerTitle: "Customer's Appointment",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen name="Diet" component={DietScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitle: "Personal Infomation",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
