import React, { useEffect } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import { primary_color } from "../components/Common";
import { styles } from "../components/Styles";

const MusicPlayer = () => {

    useEffect(() => {
    })
    
    
    const start = async() => {

        await TrackPlayer.setupPlayer();
        // Set up the player
    
        // Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: require('../src/test.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../src/test.png')
        });

        // Start playing it
        await TrackPlayer.play();
    }

    const stop = async() => {
        await TrackPlayer.pause();
    }
    return (
        <View style={styles.playerCard}>
            <ImageBackground source={require('../src/test1.png')} resizeMode="contain" 
                style={{ width: '100%', height: '100%', flex: 2}} >
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 28, color: primary_color}}>ACCIDENT</Text>
                <Text style={{textAlign:'center', fontSize: 23, color: primary_color}}>Big Bag & Mary</Text>
            </ImageBackground>
            <View style={{width:'100%', height: '10%',display: 'flex', flexDirection: 'row',flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center" , borderColor: primary_color, borderTopWidth: 2 , paddingTop: 15}}>

                <TouchableOpacity onPress={()=> stop() }> 
                    <Image source={require('../src/previous.png')} style={{width: 30, height: 30, resizeMode: "cover", marginRight: 10}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> start() }> 
                    <Image source={require('../src/play.png')} style={{width: 70, height: 70, resizeMode: "cover", marginRight: 10, marginLeft: 10}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> start() }> 
                    <Image source={require('../src/next.png')} style={{width: 30, height: 30, resizeMode: "cover", marginLeft: 10}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MusicPlayer ;