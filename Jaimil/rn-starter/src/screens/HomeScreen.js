import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hello Sam</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100
  }
});

export default HomeScreen;
