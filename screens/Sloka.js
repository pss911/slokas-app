import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../components/Footer";
import SlokaContainer from "../containers/Sloka";
import ModalPopup from "../components/ModalPopup";
import Colors from "../assets/Colors.json";

const Sloka = ({ navigation }) => {
  useEffect(() => {
    import("../assets/data/slokas/").then((res) =>
      setData(res.default[navigation.getParam("id")])
    );
  }, [navigation]);

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const [error, setError] = useState();

  function isInt(n) {
    return n % 1 === 0;
  }

  const handleSubmit = () => {
    if (isNaN(Number(text))) {
      setError("That is Not a Number. Please Enter A Valid Number.");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else if (!isInt(Number(text))) {
      setError("The Number Can't be a Decimal.");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else if (Number(text) <= 0 || Number(text) > data.length) {
      setError(`The Number Must be Between 1 and ${data.length}.`);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setIndex(Number(text) - 1);
      handleClose();
    }
  };

  const handleClose = () => {
    setText("");
    setVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {data ? (
        <ModalPopup visible={visible}>
          <Text style={{ fontFamily: "Telugu2", fontSize: 15 }}>
            Enter a Sloka # {`(1 to ${data.length})`}
          </Text>
          <TextInput
            autoFocus={true}
            onChangeText={setText}
            value={text}
            keyboardType="numeric"
            style={
              error ? [styles.textInput, { marginBottom: 2 }] : styles.textInput
            }
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={handleClose} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ModalPopup>
      ) : null}
      <SlokaContainer
        setVisible={setVisible}
        id={navigation.getParam("id")}
        data={data}
        nextIndex={index}
      />
      {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.darkAccent,
    padding: 10,
    marginHorizontal: 10,
    width: 100,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.buttonForeGround,
    fontSize: 16,
    fontFamily: "Telugu2",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: "Telugu2",
  },
  error: {
    fontSize: 12,
    color: "#ff0000",
    marginBottom: 10,
  },
});

export default Sloka;
