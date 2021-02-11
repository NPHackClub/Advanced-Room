import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const HomeScreen = () => {
  return (
  <View>
      <Text style={styles.text}>Hello Sam</Text>
      <Image style = {styles.image} source = {require("./bg-01.png")}/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100
  },
  image: {
    width: 500,
    height: 500,
  }
});

export default HomeScreen;
