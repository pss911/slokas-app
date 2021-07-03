import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SubSlokaCard from "../components/SubSlokaCard";

const SubSlokaCards = ({ id }) => {
  return (
    <ScrollView style={styles.container}>
      <SubSlokaCard id={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SubSlokaCards;
