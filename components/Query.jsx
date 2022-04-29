import { View, Text, Button } from "react-native";
import React from "react";

export default function Query() {
  const getData = async () => {
    fetch("https://itcc14.herokuapp.com/routes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View>
      <Text>Query</Text>
      <Button onPress={getData} title="click" />
    </View>
  );
}
