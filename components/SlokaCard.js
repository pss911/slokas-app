import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SlokaCard = ({image, title, description}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
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
