import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Headline from "../subcomponents/Headline";
import CategoryList from "../subcomponents/CategoryList";
import Card from "../subcomponents/Card";
import QuickRoute from "../subcomponents/QuickRoute";
import doctors from "../consts/Doctor";
import pageImages from "../consts/PageImages";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(doctors);
  const [masterDataSource, setMasterDataSource] = useState(doctors);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.firstname} ${item.lastname}`
          ? `${item.firstname} ${item.lastname}`.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

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

        <SearchBar
          round
          searchIcon={{ size: 26 }}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          placeholder="Type your doctor's name"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          value={search}
        />

        <CategoryList />

        <View>
          <FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredDataSource}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                disabled={activeCardIndex != index}
                activeOpacity={1}
                onPress={() => navigation.navigate("Booking", item)}
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
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate(item)}
              >
                <QuickRoute page={item} />
              </TouchableOpacity>
            )}
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
  searchContainer: {
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 10,
  },
  searchInputContainer: {
    backgroundColor: "#F0F8FF",
    marginLeft: 10,
    marginRight: 10,
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
});
