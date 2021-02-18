import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ChatScreen = () => {
    return (
    <View>
        <Text style = {styles.header}>Hello there</Text>
        <Image style = {styles.image} source = {require("./bg-01.png")}/>
    </View>
    );
}

const styles = StyleSheet.create({
    header:{
        fontSize: 100,
    },
    image: {
        width: 1000,
        height: 1000,
    }
})

export default ChatScreen;