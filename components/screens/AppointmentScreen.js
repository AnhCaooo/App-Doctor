import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, FlatList } from "react-native";
import { Button, Icon } from "react-native-elements";
import { auth, db } from "../../firebase";

function AppointmentScreen({ navigation }) {
  const [msg, setMsg] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    const appointmentRef = db.ref("appointments/" + auth.currentUser?.uid);
    appointmentRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setAppointments(Object.values(data));
    });
  };

  const deleteMeeting = () => {
    console.log("delete me");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.header}>Doctor: {item.doctor}</Text>
              <Text>Meeting type: {item.meeting}</Text>
              <Text>Meeting time: {item.date}</Text>
            </View>
            <Button
              containerStyle={styles.button}
              icon={
                <Icon name="delete" size={28} type="material" color="red" />
              }
              type="clear"
              onPress={deleteMeeting}
            />
          </View>
        )}
      />
    </View>
  );
}

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  cardContainer: {
    marginVertical: 30,
    flexDirection: "row",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    paddingRight: 20,
  },
});
