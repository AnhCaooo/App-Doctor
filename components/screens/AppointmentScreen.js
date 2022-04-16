import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";

import doctors from "../consts/Doctor";

function AppointmentScreen({ navigation, route }) {
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Avatar rounded size="medium" source={item.avatar} />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 16 }}>
              {item.firstname} {item.lastname}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>
              {item.professional}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 18 }}>
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
        </View>
      </View>
      <View style={styles.description}>
        <Text>
          {"\u2022"} {item.description}
        </Text>
        <Text>
          {"\u2022"} Work experiences - {item.experiences}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Text style={styles.header}>This is AppointmentScreen</Text>
        <Button
          title="Go to diet"
          onPress={() => navigation.navigate("Diet")}
        />
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
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
});

export default AppointmentScreen;
