import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import SlokaNMeaningCard from "../components/SlokaNMeaningCard";

const SlokaCards = () => {
  return (
    <ScrollView style={styles.container}>
      <Navigation />
      <SlokaNMeaningCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SlokaCards;
