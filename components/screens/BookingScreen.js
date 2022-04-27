import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import SubTabView from "../navigation/SubTabView";

function BookingScreen({ navigation, route }) {
  const doctor = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginVertical: 5,
          }}
        >
          <Avatar
            avatarStyle={{
              borderWidth: 1,
              borderColor: "#1E90FF",
            }}
            rounded
            size="large"
            source={doctor.avatar}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 16 }}>
              {doctor.firstname} {doctor.lastname}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "grey",
                paddingBottom: 5,
              }}
            >
              {doctor.professional}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
        </View>
      </View>

      <View style={styles.description}>
        <Text>
          {"\u2022"} {doctor.description}
        </Text>
        <Text>
          {"\u2022"} Work experiences - {doctor.experiences}
        </Text>
      </View>

      <SubTabView doctor={doctor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 20,
  },
  subTabView: {
    marginTop: 30,
  },
});

export default BookingScreen;
