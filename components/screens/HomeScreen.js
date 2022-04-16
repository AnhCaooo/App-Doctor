import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import Headline from "../subcomponents/Headline";
import CategoryList from "../subcomponents/CategoryList";
import Card from "../subcomponents/Card";
import QuickRoute from "../subcomponents/QuickRoute";
import doctors from "../consts/Doctor";
import pageImages from "../consts/PageImages";

export default function HomeScreen({ navigation }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { width } = Dimensions.get("screen");
  const cardWidth = width / 1.9;

  return (
    <View style={styles.container}>
      <Headline />

      <ScrollView
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.textHeader}>Find your doctor here</Text>
        </View>

        <View style={styles.serachInputContainer}>
          <TextInput
            placeholder="Type your doctor's name"
            style={{ fontSize: 16, paddingLeft: 15 }}
          />

          <Icon name="search" size={30} style={{ marginRight: 10 }} />
        </View>

        <View>
          <CategoryList />
        </View>

        <View>
          <FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={doctors}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                disabled={activeCardIndex != index}
                activeOpacity={1}
                onPress={() => navigation.navigate("Appointment")}
              >
                <Card doctor={item} index={index} />
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.headerQuickAcess}>
          <Text style={styles.textHeaderQuickAccess}>Quick Access</Text>
        </View>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={pageImages}
            contentContainerStyle={{
              paddingLeft: 20,
              paddingVertical: 30,
            }}
            renderItem={({ item, index }) => <QuickRoute page={item} />}
          />
        </View>
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
  headerQuickAcess: {
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeaderQuickAccess: {
    fontSize: 26,
    fontWeight: "bold",
  },
  serachInputContainer: {
    height: 50,
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#b4b4b4",
    justifyContent: "space-between",
  },
});
