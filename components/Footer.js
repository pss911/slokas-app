import React from "react";
import { Image, View, Text, StyleSheet, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../assets/Colors.json";
import logo from "../assets/icon.png";

const Footer = () => {
  return (
    <View>
      <View style={styles.footer}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={logo} style={{ width: 55, height: 55 }} />
          </View>
          <View style={styles.socialMediaContainer}>
            <View style={styles.socialMedia}>
              <AntDesign
                name="twitter"
                onPress={() => Linking.openURL("http://twitter.com")}
                size={22}
                color={Colors.buttonForeGround}
              />
            </View>
            <View style={styles.socialMedia}>
              <AntDesign
                name="facebook-square"
                onPress={() => Linking.openURL("http://facebook.com")}
                size={22}
                color={Colors.buttonForeGround}
              />
            </View>
            <View style={styles.socialMedia}>
              <AntDesign
                name="youtube"
                onPress={() => Linking.openURL("http://youtube.com")}
                size={22}
                color={Colors.buttonForeGround}
              />
            </View>
            <View style={styles.socialMedia}>
              <FontAwesome5
                name="patreon"
                onPress={() => Linking.openURL("http://patreon.com")}
                size={22}
                color={Colors.buttonForeGround}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.copyRightText}>
            Bhakti Lahari © 2021. All Rights Reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 110,
    backgroundColor: Colors.light,
  },
  imageContainer: {
    width: 55,
    height: 55,
    backgroundColor: Colors.dark,
    borderRadius: 10,
    overflow: "hidden",
  },

  socialMedia: {
    width: 40,
    height: 40,
    backgroundColor: Colors.dark,
    borderRadius: 10,
    marginLeft: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    color: Colors.dark,
    fontFamily: "Telugu1",
  },
});

export default Footer;
