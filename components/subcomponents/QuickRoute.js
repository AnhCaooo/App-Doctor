import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("screen");

function QuickRoute({ page }) {
  return (
    <View style={styles.quickRoute}>
      <Image style={styles.quickRouteImage} source={page.image} />
    </View>
  );
}

export default QuickRoute;

const styles = StyleSheet.create({
  quickRoute: {
    height: 150,
    width: width,
    elevation: 15,
    borderRadius: 10,
  },
  quickRouteImage: {
    height: 150,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
