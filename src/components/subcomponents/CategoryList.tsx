import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

function CategoryList() {
  const categories = [
    "General Practioner",
    "Internale Medicine",
    "Dermatologist",
    "Herbal Medicine",
    "Infectious Disease",
    "Surgeon",
    "Veterinarian",
  ];

  return (
    <View style={{ marginRight: 20 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <View style={styles.categoryListContainer}>
            <Text style={{ ...styles.categortListText }}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  categoryListContainer: {
    borderWidth: 0.75,
    height: 30,
    borderRadius: 10,
    borderColor: "#b4b4b4",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  categortListText: {
    fontSize: 15,
    color: "#b4b4b4",
    fontWeight: "bold",
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
  },
});
