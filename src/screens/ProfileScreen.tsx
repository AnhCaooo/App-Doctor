import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
// @ts-expect-error TS(2307): Cannot find module '../../../firebase' or its corr... Remove this comment to see the full error message
import { auth } from "../../../firebase";

export default function ProfileScreen({
  navigation
}: any) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      // @ts-expect-error TS(2304): Cannot find name 'alert'.
      .catch((err: any) => alert(err.message));
  };

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
      <Text style={styles.textContainer}>{auth.currentUser?.email} </Text>
      <Button
        type="solid"
        containerStyle={styles.containerStyle}
        buttonStyle={styles.buttonContainer}
        titleStyle={{ color: "black", fontSize: 18 }}
        title="Change Picture"
        onPress={() => console.log("Change this picture!")}
      />

      <Button
        type="solid"
        containerStyle={styles.containerStyle}
        buttonStyle={styles.buttonContainer}
        titleStyle={{ color: "black", fontSize: 18 }}
        title="Edit Profile"
        onPress={() => console.log("Edit my profile!")}
      />

      <Button
        type="solid"
        containerStyle={styles.containerStyle}
        buttonStyle={styles.buttonContainer}
        titleStyle={{ color: "black", fontSize: 18 }}
        title="Log Out"
        onPress={handleSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "white",
  },
  avatarStyle: {
    borderWidth: 1,
    borderColor: "#A9A9A9",
  },
  textContainer: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerStyle: {
    marginHorizontal: 50,
    marginVertical: 20,
    width: 160,
  },
  buttonContainer: {
    backgroundColor: "white",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    borderRadius: 10,
  },
});
