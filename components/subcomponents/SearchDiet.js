import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { SearchBar } from "react-native-elements";

function SearchDiet() {
  const [search, setSearch] = useState("");

  const updateSearch = (userSearch) => {
    setSearch(userSearch);
  };

  return (
    <View>
      <SearchBar
        round
        searchIcon={{ size: 26 }}
        containerStyle={styles.container}
        inputContainerStyle={styles.inpurtContainer}
        placeholder="Search meals, diets"
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 10,
  },
  inpurtContainer: {
    backgroundColor: "#F0F8FF",
    marginLeft: 10,
    marginRight: 10,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: "94%",
    height: 50,
    backgroundColor: "gray",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
  },

  searchIcon: { fontSize: 24, padding: 5, color: "gray" },

  view1: {
    height: 70,
    justifyContent: "center",

    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },

  icon2: { fontSize: 24, padding: 5, color: "gray" },
  modal: {
    flex: 1,
  },
});

export default SearchDiet;
