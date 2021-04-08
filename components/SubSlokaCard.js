import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubSlokaCard = () => {
  return (
    <View style={styles.subSlokaConatiner}>
      <Text style={styles.slokaNameText}>Some Sloka</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subSlokaConatiner: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#FCCE89",
    display: "flex",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  slokaNameText: {
    fontSize: 36,
    color: "#890707",
    fontFamily: "Poppins",
  },
});

export default SubSlokaCard;
