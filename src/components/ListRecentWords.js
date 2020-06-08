import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import CardWord from "./CardWord";

export default function ListRecentWords(props) {
  const [recentWords, setRecentWords] = useState([
    { word: "cat", proper: "danh tu", mean: "mèo", key: "2" },
    { word: "dog", proper: "danh tu", mean: "chó", key: "3" },
    ]
  );
  return (
    <View style={styles.list}>
      <FlatList
        data={recentWords}
        renderItem={({ item }) => (
          <CardWord item={item} nav={props.navigation}/>
        )}
      />
    </View>

  )
}
const styles = StyleSheet.create({
  list: {
    marginBottom:100
  }
})
