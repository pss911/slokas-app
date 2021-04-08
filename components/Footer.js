import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

const Footer = () => {
  return (
    <View>
      <View style={styles.footer}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}></View>
          <View style={styles.socialMediaContainer}>
            <View style={styles.socialMedia}></View>
            <View style={styles.socialMedia}></View>
            <View style={styles.socialMedia}></View>
            <View style={styles.socialMedia}></View>
          </View>
        </View>
        <View>
          <Text style={styles.copyRightText}>
            Slokas App © 2021. All Rights Reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 110,
    backgroundColor: "#EE7D41",
  },
  imageContainer: {
    width: 55,
    height: 55,
    backgroundColor: "#890707",
    borderRadius: 10,
  },
  socialMedia: {
    width: 40,
    height: 40,
    backgroundColor: "#890707",
    borderRadius: 10,
    marginLeft: 5,
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  copyRightText: {
    textAlign: "center",
    fontSize: 16,
    color: "#890707",
    fontFamily: "Poppins",
  },
});

export default Footer;
