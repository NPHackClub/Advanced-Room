import React from "react";
import { Text, StyleSheet } from "react-native";

const LoadingScreen = () => {
  return <Text style={styles.text}>Loading Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100
  }
});

export default LoadingScreen;
