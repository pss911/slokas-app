import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/Colors.json";

const SlokaNMeaningCard = ({
  sloka,
  wordToWordMeaning,
  meaning,
  meaningType,
  setMeaningType,
}) => {
  return (
    <View>
      <View style={styles.slokaCard}>
        <Text style={styles.slokaText}>{sloka}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.options}>
          <View style={styles.option}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setMeaningType(true)}
            >
              <Text
                style={
                  meaningType == true
                    ? [styles.optionText, styles.activeOption]
                    : styles.optionText
                }
              >
                భావము
              </Text>
            </TouchableOpacity>
          </View>
          {wordToWordMeaning ? (
            <View style={styles.option}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setMeaningType(false)}
              >
                <Text
                  style={
                    meaningType == false
                      ? [styles.optionText, styles.activeOption]
                      : styles.optionText
                  }
                >
                  ప్రతి పదార్ధము
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
      {
        <View style={styles.meaningCard}>
          <Text style={styles.meaningText}>
            {meaningType === true ? meaning : null}
            {meaningType === false ? wordToWordMeaning : null}
          </Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  slokaCard: {
    borderRadius: 10,
    backgroundColor: Colors.light,
    paddingTop: 30,
  },
  slokaText: {
    paddingTop: 5,
    lineHeight: 50,
    fontSize: 19,
    fontFamily: "Telugu1",
    textAlign: "center",
    color: Colors.dark,
    paddingHorizontal: 15,
    paddingBottom: 35,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: -25,
  },
  option: {
    borderRadius: 10,
    marginHorizontal: 5,
    height: 45,
    backgroundColor: Colors.darkAccent,
    width: 130,
  },
  optionText: {
    lineHeight: 45,
    textAlign: "center",
    fontFamily: "Telugu1",
    fontSize: 20,
    color: Colors.buttonForeGround,
  },
  activeOption: { color: Colors.active, textDecorationLine: "underline" },
  meaningCard: {
    marginTop: 35,
    marginBottom: 10,
    backgroundColor: Colors.light,
    padding: 15,
    borderRadius: 10,
  },
  meaningText: {
    paddingTop: 5,
    lineHeight: 50,
    fontSize: 20,
    fontFamily: "Telugu1",
    textAlign: "center",
    color: Colors.dark,
  },
});

export default SlokaNMeaningCard;
