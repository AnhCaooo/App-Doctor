import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

function SearchDoctor() {
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
        placeholder="Type your doctor's name"
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
});

export default SearchDoctor;
