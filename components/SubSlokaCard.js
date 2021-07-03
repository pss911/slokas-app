import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubSlokaCard = ({ name }) => {
  return (
    <View style={styles.subSlokaConatiner}>
      <Text style={styles.slokaNameText}>{name}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  slokaNameText: {
    fontSize: 36,
    color: "#890707",
    fontFamily: "Telugu1",
  },
});

export default SubSlokaCard;
