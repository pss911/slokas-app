import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import SlokaNMeaningCard from "../components/SlokaNMeaningCard";

const SlokaCards = ({ id, setVisible, data, nextIndex }) => {
  const [index, setIndex] = useState(0);
  const [meaningType, setMeaningType] = useState();
  useEffect(() => {
    setIndex(nextIndex);
  }, [nextIndex]);
  return (
    <>
      {data ? (
        <>
          <Navigation
            setVisible={setVisible}
            id={data[index].id}
            leftClick={() => {
              if (index > 0) {
                setIndex(index - 1);
                setMeaningType(undefined);
              } else {
                null;
              }
            }}
            rightClick={() => {
              if (index < data.length - 1) {
                setIndex(index + 1);
                setMeaningType(undefined);
              } else {
                null;
              }
            }}
          />
          <ScrollView style={styles.container}>
            <ScrollView>
              <SlokaNMeaningCard
                sloka={data[index].sloka}
                meaningType={meaningType}
                setMeaningType={setMeaningType}
                wordToWordMeaning={data[index].wordByWordMeaning}
                meaning={data[index].meaning}
              />
            </ScrollView>
          </ScrollView>
        </>
      ) : (
        <ScrollView></ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SlokaCards;
