import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import SearchDiet from "../subcomponents/SearchDiet";

function DietScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchDiet />
    </View>
  );
}

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
