import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Navigation from "../components/Navigation";
import SlokaNMeaningCard from "../components/SlokaNMeaningCard";

const SlokaCards = ({ id }) => {
  const [data, setData] = useState();
  useEffect(() => {
    import("../assets/data/slokas/").then((res) => setData(res.default[id]));
  }, []);
  const [index, setIndex] = useState(0);
  const [meaningType, setMeaningType] = useState();
  return (
    <>
      {data ? (
        <View style={styles.container}>
          <Navigation
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
          <ScrollView>
            <SlokaNMeaningCard
              sloka={data[index].sloka}
              meaningType={meaningType}
              setMeaningType={setMeaningType}
              wordToWordMeaning={data[index].wordByWordMeaning}
              meaning={data[index].meaning}
            />
          </ScrollView>
        </View>
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
