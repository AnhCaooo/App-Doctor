import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, FlatList } from "react-native";
import { auth, db } from "../../firebase";

function AppointmentScreen({ navigation }) {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Doctor: {item.doctor}</Text>
              <Text>Meeting type: {item.meeting}</Text>
              <Text>Meeting time: {item.date}</Text>
            </View>
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
    borderWidth: 0.5,
    borderRadius: 12,
    width: Dimensions.get("window").width * 0.8,
  },
  headerContainer: {
    margin: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    paddingRight: 20,
  },
});
