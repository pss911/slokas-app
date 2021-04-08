import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SubSlokaCard from "../components/SubSlokaCard";

const SubSlokaCards = () => {
  return (
    <ScrollView style={styles.container}>
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
      <SubSlokaCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SubSlokaCards;
