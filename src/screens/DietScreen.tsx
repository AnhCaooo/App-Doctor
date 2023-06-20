import React from "react";
import { StyleSheet, View } from "react-native";
// @ts-expect-error TS(2307): Cannot find module '../subcomponents/SearchDiet' o... Remove this comment to see the full error message
import SearchDiet from "../subcomponents/SearchDiet";

function DietScreen({
  navigation
}: any) {
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
