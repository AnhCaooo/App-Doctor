import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { format } from "date-fns";

export default function Headline() {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.header}>
      <View>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Dashboard</Text>
        <Text style={{ fontSize: 16 }}>{format(date, "EEEE, MMMM dd")}</Text>
      </View>
      <Icon name="notifications" size={26} color={"grey"} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
