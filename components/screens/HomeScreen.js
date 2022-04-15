import React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { Input, Icon } from "react-native-elements";
import CategoryList from "../subcomponents/CategoryList";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Dashboard</Text>
          <Text style={{ fontSize: 16 }}>Tuesday, April 12</Text>
        </View>
        <Icon name="notifications" size={26} color={"grey"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Find your doctor here</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.serachInputContainer}>
            <TextInput
              placeholder="Type your doctor's name"
              style={{ fontSize: 16, paddingLeft: 15 }}
            />
            <Icon name="search" size={30} style={{ marginRight: 10 }} />
          </View>
          <CategoryList />
          <Text>This blank space is for doctor flatlist!</Text>
        </ScrollView>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Quick Access</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 40,
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
    marginRight: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#b4b4b4",
    justifyContent: "space-between",
  },
});
