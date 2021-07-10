import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navigation = ({ leftClick, rightClick, id }) => {
  return (<View style={{marginHorizontal: 10}}>
        <View style={styles.navConatiner}>
          <TouchableOpacity activeOpacity={0.7} onPress={leftClick}>
            <View style={styles.buttons}>
              <AntDesign name="arrowleft" size={28} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={styles.id}>{id}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={rightClick}>
            <View style={styles.buttons}>
              <AntDesign name="arrowright" size={28} color="white" />
            </View>
          </TouchableOpacity>
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
  id: {
    fontFamily: "Telugu1",
    fontSize: 20,
    color: "#C31A1A"
  }
});

export default Navigation;
