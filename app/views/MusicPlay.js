import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import { primary_color, secondary_color } from "../components/Common";
import { ProgressBar } from "../components/ProgressBar";
import { styles } from "../components/Styles";
import Sound from 'react-native-sound';
import Slider from 'react-native-slider'; 

const MusicPlayer = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [audioFile, setAudioFile] = useState({});
    const [duration, setDuration]= useState(0);
    const [position, setPosition]=useState(0);
    const [playing, setPlaying]=useState(false)


    useEffect(()=>{
        loadAudio();
    },[])

    const loadAudio = () => {
        music = new Sound('test.mp3', '', (error) => {
          if (error) {
            console.log('failed to load the audio file', error);
          } else {
            // set the audio file duration
            setDuration(music.getDuration());
          }
        });
        setAudioFile(music);
    }

    const updateProgress = (position) => {
        audioFile.setCurrentTime(position);
        setPosition(position);
    }

    const togglePlay = () => {
        setPlaying(!playing);
        playing ? audioFile.play() : audioFile.pause();
    
    } 
    return (
        <View style={styles.playerCard}>
            <ImageBackground source={require('../src/test1.png')} resizeMode="contain" 
                style={{ width: '100%', height: '100%', flex: 2}} >
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 28, color: primary_color}}>ACCIDENT</Text>
                <Text style={{textAlign:'center', fontSize: 23, color: primary_color}}>Big Bag & Mary</Text>
            </ImageBackground>

            <Slider
                value={position}
                minimumValue={0}
                maximumValue={duration}
                minimumTrackTintColor={primary_color}
                maximumTrackTintColor='grey'
                thumbTintColor={primary_color}
                onSlidingComplete={(position) => updateProgress(position)}
            />

            <View style={{width:'100%', height: '10%',display: 'flex', flexDirection: 'row',flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center", paddingTop: 15}}>

                <TouchableOpacity 
                // onPress={()=> stop() }
                >

                    <Image source={require('../src/previous.png')} style={{width: 30, height: 30, resizeMode: "cover", marginRight: 10}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> togglePlay() }> 
                    <Image source={require('../src/play.png')} style={{width: 70, height: 70, resizeMode: "cover", marginRight: 10, marginLeft: 10}} />
                </TouchableOpacity>

                <TouchableOpacity 
                // onPress={()=> start() 
                > 
                    <Image source={require('../src/next.png')} style={{width: 30, height: 30, resizeMode: "cover", marginLeft: 10}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MusicPlayer ;