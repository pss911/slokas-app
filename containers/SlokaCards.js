import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SlokaCard from "../components/SlokaCard";

const SlokaCards = () => {
  return (
    <ScrollView style={styles.container}>
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
      <SlokaCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default SlokaCards;
