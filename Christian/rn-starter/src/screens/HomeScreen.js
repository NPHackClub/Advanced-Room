import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Dark theme</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fff",
  },
  view: {
    height: "100%",
    backgroundColor: "#343434",
  },
});

export default HomeScreen;
