import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const SubSlokaCard = ({ id }) => {
  const [data, setData] = useState();
  useEffect(() => {
    import(`../assets/data/divisions/${id}`).then((p) => setData(p.default));
  }, []);

  return (
    <>
      {data ? (
        <FlatList
          data={data}
          renderItem={(division) => renderItem(division)}
          keyExtractor={(division) => division.id}
        />
      ) : null}
    </>
  );
};

const renderItem = (division) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={null}>
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
    height: 60,
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
