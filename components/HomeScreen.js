import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { Input, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>
          Weather
        </Text>
        <Icon name="notifications" size={24} color={"grey"} />
      </View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Find your doctor here</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.serachInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 10 }} />
          <TextInput
            placeholder="Type your doctor's name"
            style={{ fontSize: 16, paddingLeft: 10 }}
          />
        </View>
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Quick Access</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  serachInputContainer: {
    height: 50,
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 23,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#b4b4b4",
  },
});
