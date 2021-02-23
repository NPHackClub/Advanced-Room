import React from "react";
import { Text, StyleSheet, Image, View, Button, TouchableOpacity } from "react-native";

const ChatScreen = props => {
    return (
    <View>
        <Text style = {styles.header}>Hello there</Text>
        <Image style = {styles.image} source = {require("./bg-01.png")}/>
        <Button 
            title = "Go to Home"
            onPress = {()=> props.navigation.navigate('Home')}
        />
        <TouchableOpacity onPress = {()=> props.navigation.navigate('Home')}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
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