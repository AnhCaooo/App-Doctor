import React from "react";
import { StyleSheet, View } from "react-native";
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
    marginTop: 20,
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
