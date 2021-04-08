import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navigation = () => {
  return (
    <View style={styles.navConatiner}>
      <View style={styles.buttons}>
        <Text style={styles.text}>&#60;</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.text}>&#62;</Text>
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
  text: {
    fontSize: 36,
    color: "#fff",
  },
});

export default Navigation;
