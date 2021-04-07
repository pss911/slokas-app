import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Slokas App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "#FCCE89",
    height: 76,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  headerText: {
    fontSize: 48,
    fontFamily: "Poppins",
    color: "#C31A1A",
  },
});

export default Header;
