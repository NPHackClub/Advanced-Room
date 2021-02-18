import React from "react";
import { Text, StyleSheet, Image, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = props => {
  return (
  <View>
      <Text style={styles.text}>Hello Sam</Text>
      <Image style = {styles.image} source = {require("./bg-01.png")}/>
      <Button 
        onPress = {()=> props.navigation.navigate('Chat')}
        title = "Go to Chat Screen"
      />
      <TouchableOpacity onPress = {()=> props.navigation.navigate('Chat')}>
        <Text>Go to Chat Screen</Text>
      </TouchableOpacity>
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
