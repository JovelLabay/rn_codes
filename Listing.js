import { View, Text, StyleSheet, Animated } from "react-native";
import React from "react";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

const left = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.leftContainer}>
      <Animated.Text style={[styles.leftText, { transform: [{ scale }] }]}>
        Hello
      </Animated.Text>
    </View>
  );
};

const right = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <Animated.View style={[styles.rightContainer, { transform: [{ scale }] }]}>
      {/*  */}
      <View
        style={{
          backgroundColor: "red",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => alert("hello")}>
          <AntDesign name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/*  */}
      <View
        style={{
          backgroundColor: "pink",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/*  */}
      <View
        style={{
          backgroundColor: "orange",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <FontAwesome name="street-view" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default function Listing({ id, fname, koma }) {
  return (
    <Swipeable
      renderLeftActions={left}
      renderRightActions={right}
      onSwipeableLeftOpen={koma}
    >
      <View style={styles.container}>
        <Text style={styles.font}>{fname}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  leftContainer: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
  },
  leftText: {
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "white",
  },
  rightContainer: {
    flex: 0.5,
    flexDirection: "row",
  },
});
