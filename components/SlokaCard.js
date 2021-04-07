import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SlokaCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Stotram</Text>
        <Text style={styles.description}>Om Namah Sivaya</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#FCCE89",
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 80,
    width: 80,
    backgroundColor: "#DE5C17",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  detailsContainer: {
    height: "100%",
    marginVertical: 10,
  },
  title: { fontFamily: "Poppins", fontSize: 36, color: "#890707" },
  description: { fontFamily: "Poppins", fontSize: 24, color: "#890707" },
});

export default SlokaCard;
