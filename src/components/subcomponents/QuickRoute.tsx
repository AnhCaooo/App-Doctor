import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.2;

function QuickRoute({
  page
}: any) {
  return (
    <View style={styles.quickRoute}>
      <ImageBackground
        style={styles.quickRouteImage}
        imageStyle={{ borderRadius: 15 }}
        source={page.image}
      >
        <View style={styles.routeTag}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>{page.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default QuickRoute;

const styles = StyleSheet.create({
  quickRoute: {
    height: 200,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "white",
  },
  quickRouteImage: {
    height: 200,
    width: "100%",
    justifyContent: "center",
  },
  routeTag: {
    alignItems: "center",
    lineHeight: 75,
    backgroundColor: "#E6E6FA",
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    lineHeight: 0.75,
  },
});
