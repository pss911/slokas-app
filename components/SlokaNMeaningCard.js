import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SlokaNMeaningCard = () => {
  return (
    <View>
      <View>
        <Text style={styles.slokaText}>
          శుక్లాంబరధరం విష్ణుం{"\n"}
          శశివర్ణం చతుర్బుజమ్ ।{"\n"}
          ప్రసన్న వనం ద్యాయేత్ సర్వ{"\n"}
          విఘ్నోపశాంతయే ।।{"\n"}
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.options}>
          <View>
            <Text style={styles.option}>Left</Text>
          </View>
          <View>
            <Text style={styles.option}>Right</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.meaningText}>
          యస్య ద్విరద వక్త్రాద్యః{"\n"}
          పారిసద్య: పరవశ్శతమ్ ।{"\n"}
          విఘ్నం విఘ్నన్తి సతతం{"\n"}
          విష్వక్సేనం తమాశ్రయే।।
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slokaText: {
    lineHeight: 50,
    fontSize: 35,
    fontFamily: "Telugu2",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#FCCE89",
    color: "#C31A1A",
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
    width: 75,
    backgroundColor: "#C31A1A",
    lineHeight: 45,
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#fff",
  },
  meaningText: {
    lineHeight: 50,
    fontSize: 35,
    fontFamily: "Telugu2",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#FCCE89",
    color: "#C31A1A",
    marginTop: 30,
    marginBottom: 10,
  },
});

export default SlokaNMeaningCard;
