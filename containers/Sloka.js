import React, {useState} from "react";
import { StyleSheet, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import SlokaNMeaningCard from "../components/SlokaNMeaningCard";

const SlokaCards = () => {
  const [meaningType, setMeaningType] = useState();
  return (
    <ScrollView style={styles.container}>
      <Navigation />
      <SlokaNMeaningCard meaningType={meaningType} setMeaningType={setMeaningType} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SlokaCards;