import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View>
      <View style={styles.footerContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    display: "flex",
    justifyContent: "flex-end",
    minHeight: "100%",
    flexDirection: "column",
    // position: "absolute",
    // width: "100%",
    // top: 675,
    // left: 0,
    // right: 0,
  },
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
    fontSize: 20,
    color: "#890707",
    fontFamily: "Poppins",
  },
});

export default Footer;
