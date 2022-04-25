import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={100}
        icon={{ name: "person", type: "material" }}
        //source={user.avatar}
        avatarStyle={styles.avatarStyle}
        activeOpacity={0.7}
        containerStyle={{ marginVertical: 20 }}
      />

      <Button
        type="solid"
        containerStyle={styles.containerStyle}
        buttonStyle={styles.buttonContainer}
        titleStyle={{ color: "black", fontSize: 18 }}
        title="Change Picture"
        onPress={() => console.log("Change this picture!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatarStyle: {
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    //backgroundColor: "white",
  },
  containerStyle: {
    marginHorizontal: 50,
    //marginTop: 20,
    width: 160,
  },
  buttonContainer: {
    backgroundColor: "white",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    borderRadius: 10,
  },
});
