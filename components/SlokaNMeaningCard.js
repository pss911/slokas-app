import React, { useState } from "react";
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
          O Lord, he whose dress is the wide white sky, who is all pervading,
          {"\n"}
          whose arms are spread to all four sides. One with the blissful face,
          {"\n"}
          We meditate on you, nullify all troubles.{"\n"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slokaText: {
    fontWeight: "bold",
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
    top: -15,
  },
  option: {
    marginHorizontal: 5,
    height: 45,
    width: 75,
    backgroundColor: "#C31A1A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#fff",
  },
  meaningText: {
    fontSize: 35,
    fontFamily: "Poppins",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#FCCE89",
    color: "#C31A1A",
    marginTop: 35,
    marginBottom: 20,
  },
});

export default SlokaNMeaningCard;
