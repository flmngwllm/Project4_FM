import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import StartupLogo from "../commons/StartupLogo";
import LogButtons from "../commons/LogButtons";
import {TouchableOpacity, Animated, Alert} from 'react-native'

class LoginScreen extends Component {
     state={
         opacity: new Animated.Value(0)
         position: new Animated.Value(0)

     }


     componentDidMount() {
         this.opacityAnim();
     }

    opacityAnim = () => {
         Animated.timing(this.state.opacity,{
             toValue: 1,
             duration: 200
         }).start()
     }

     positionAnim = () => {
         Animated.timing(this.state.opacity,{
             toValue: 1,
             duration: 200
         }).start()
     }

     onGoogleClick  = () => {
         Alert.alert('Please Sign In')
     }

    render() {
        const {opacity} =this.state

        return (
            <Box f={1} center bg = "white">
                <Animated.View style = {{flex: 1}}>
                <Box f={1} center>
                <StartupLogo/>
                </Box>
                </Animated.View>

                <Animated.View style={{flex: 0.9,  width :"100%", opacity}}>
                <LogButtons onPress={this.onGoogleClick} type = "google">Contiue with Google</LogButtons>
                </Animated.View>
            </Box>
        );
    }
}

export default LoginScreen;