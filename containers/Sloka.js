import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import SlokaNMeaningCard from "../components/SlokaNMeaningCard";

const SlokaCards = ({ id }) => {
  const [data, setData] = useState();
  useEffect(() => {
    import("../assets/data/slokas/").then((res) => setData(res.default[id]));
  }, [id]);
  const [index, setIndex] = useState(0);
  const [meaningType, setMeaningType] = useState();
  return (
    <>
      {data ? (
        <>
          <Navigation
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
