import React, {Component} from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from "react-native";

export default class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
              <SafeAreaView style= {styles.safeArea}/>
              <ImageBackground source={require('../assets/bg_updates.jpg')} style={styles.bg}>
                <View style={styles.title}>
                   <Text style={styles.titleText}> APP Rastreador </Text> 
                </View>

                <TouchableOpacity style={styles.button} onPress={
                    ()=> this.props.navigation.navigate("Iss")
                }>
                    <Text style={styles.buttonText}> Localização da ISS</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    ()=> this.props.navigation.navigate("Meteor")
                }>
                    <Text style={styles.buttonText}> Meteoros</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.icon} />
                </TouchableOpacity>
              </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    title: {
        flex: 0.17,
        justifyContent: 'center',
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold"
    },
    button: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        width: '80%'
    },
    buttonText: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        marginTop:75,
        paddingLeft: 30
    },
    bg: {
        flex: 1, 
        resizeMode: 'cover',
        width: "100%"
    },
    icon: {
        position: 'absolute',
        height: 200,
        width:200,
        resizeMode: 'contain',
        right: 20,
        top: -80
    }

})