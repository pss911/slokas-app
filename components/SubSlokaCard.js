import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "../assets/Colors.json";

const SubSlokaCard = ({ id, navigation }) => {
  const [data, setData] = useState();
  useEffect(() => {
    import("../assets/data/divisions/").then((res) => setData(res.default[id]));
  }, [id]);
  return (
    <>
      {data ? (
        <FlatList
          data={data}
          renderItem={(division) => renderItem(division, navigation)}
          keyExtractor={(division) => division.id}
        />
      ) : null}
    </>
  );
};

const renderItem = (division, navigation) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Sloka", { id: division.item.id })}
    >
      <View style={styles.subSlokaConatiner}>
        <Text style={styles.slokaNameText}>{division.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subSlokaConatiner: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.light,
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  slokaNameText: {
    fontSize: 36,
    color: Colors.dark,
    fontFamily: "Telugu1",
  },
});

export default SubSlokaCard;
