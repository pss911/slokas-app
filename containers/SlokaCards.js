import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SlokaCard from "../components/SlokaCard";
import books from "../assets/data/books";

const SlokaCards = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={books}
        renderItem={(books) => renderItem(books, navigation)}
        keyExtractor={(book) => book.id}
      />
    </ScrollView>
  );
};

const renderItem = (books, navigation) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        books.item.hasDivisions
          ? navigation.navigate("SubMenu", { id: books.item.id })
          : navigation.navigate("Sloka", { id: books.item.id })
      }
    >
      <SlokaCard
        title={books.item.name}
        description={books.item.description}
        image={books.item.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default SlokaCards;
