import React from "react";
import { Text, StyleSheet, Image, View, Button, TouchableOpacity } from "react-native";

const Announcements = props => {
    return (
    <View>
        <Text style = {styles.header}>Here Are Your Announcements</Text>
        <Image style = {styles.image} source = {require("./bg-01.png")}/>
        <Button 
            title = "Go to Home"
            onPress = {()=> props.navigation.navigate('Home')}
        />
        <Button 
            title = "Go to Chat"
            onPress = {()=> props.navigation.navigate('Chat')}
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

export default Announcements;