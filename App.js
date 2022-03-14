import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Listing from "./Listing";

import "react-native-gesture-handler";

const list = [
  { id: 1, fname: "labay" },
  { id: 2, fname: "jovel" },
  { id: 3, fname: "ate" },
  { id: 4, fname: "apple" },
  { id: 5, fname: "samsung" },
  { id: 6, fname: "lenovo" },
  { id: 7, fname: "asus" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Listing {...item} koma={() => alert(item.fname)} />;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator}></View>;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#e4e4e4",
    marginLeft: 10,
  },
});
