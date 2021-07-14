import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../assets/Colors.json";

const Navigation = ({ leftClick, rightClick, id, setVisible }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={styles.navConatiner}>
        <TouchableOpacity activeOpacity={0.7} onPress={leftClick}>
          <View style={styles.buttons}>
            <AntDesign
              name="arrowleft"
              size={28}
              color={Colors.buttonForeGround}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.id}>{id}</Text>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{ padding: 10 }}
        >
          <AntDesign name="search1" size={24} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={rightClick}>
          <View style={styles.buttons}>
            <AntDesign
              name="arrowright"
              size={28}
              color={Colors.buttonForeGround}
            />
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
    backgroundColor: Colors.light,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: Colors.darkAccent,
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
    color: Colors.dark,
  },
});

export default Navigation;
