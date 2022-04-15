import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2;

function Card({ doctor, index }) {
  return (
    <View style={styles.card}>
      <Image source={doctor.image} style={styles.cardImage} />
      <View style={styles.cardTitle}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Dr.{doctor.lastname}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "grey" }}>
          {doctor.title}
        </Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "#ADD8E6",
  },
  cardImage: {
    height: 230,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
  },
});
