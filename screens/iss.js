import React, {Component} from "react";
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackground, Image } from "react-native";
import axios from 'axios';
import MapView, {Marker} from 'react-native-maps';

export default class IssScreen extends Component {
    constructor(){
        super();
        this.state = {
            location: {}
        }
    }

    getIssLocation = () => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(response => {
            this.setState({location: response.data})
        }).catch(error=> {
            alert(error.message)
        })
    }

    componentDidMount(){
        this.getIssLocation();
    }

    render(){
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: "center"
                    
                }}>
                    <Text> Carregando... </Text>
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                <SafeAreaView style= {styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg_updates.jpg')} style={styles.backgroundImage}>
                  <View style={styles.titleContainer}>
                     <Text style={styles.titleText}> ISS Location </Text> 
                  </View>

                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={{latitude: this.state.location.latitude,
                                 longitude: this.state.location.longitude}}
                    >
                        <Marker 
                            coordinate={{latitude: this.state.location.latitude,
                                         longitude: this.state.location.longitude}}
                        >
                            <Image source={require('../assets/iss_icon.png')} style={{height: 50, width: 50}} />
                        </Marker>
                    </MapView>

                </View>


                <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                            <Text style={styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                            <Text style={styles.infoText}>Altitude (KM): {this.state.location.altitude}</Text>
                            <Text style={styles.infoText}>Velocidade (KM/H): {this.state.location.velocity}</Text>
               </View>
                </ImageBackground>
              </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    refeshContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: "100%",
        height: "100%"
    },
infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30
},
infoText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
}
});