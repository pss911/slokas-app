import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SubSlokaCard from "../components/SubSlokaCard";

const SubSlokaCards = ({ id, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <SubSlokaCard id={id} navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SubSlokaCards;
