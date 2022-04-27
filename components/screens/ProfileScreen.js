import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { auth } from "../../firebase";

export default function ProfileScreen({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((err) => alert(err.message));
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
    borderWidth: 1,
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
