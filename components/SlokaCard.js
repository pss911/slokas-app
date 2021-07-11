import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../assets/Colors.json";

const SlokaCard = ({ image, title }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  cardContainer: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: Colors.light,
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkAccent,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  detailsContainer: {
    height: "100%",
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
  },
  title: { fontFamily: "Telugu1", fontSize: 36, color: Colors.dark },
});

export default SlokaCard;
