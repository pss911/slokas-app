import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navigation = () => {
  return (
    <View style={styles.navConatiner}>
      <View style={styles.buttons}>
        <AntDesign name="arrowleft" size={28} color="white" />
      </View>
      <View style={styles.buttons}>
        <AntDesign name="arrowright" size={28} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navConatiner: {
    height: 60,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#FCCE89",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "#DE5C17",
    height: 45,
    width: 60,
    marginHorizontal: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navigation;
