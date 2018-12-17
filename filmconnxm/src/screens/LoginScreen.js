import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import StartupLogo from "../commons/StartupLogo";
import LogButtons from "../commons/LogButtons";
import {TouchableOpacity, Animated, Alert} from 'react-native'
import {FacebookApi} from "../logapi/facebook";


// const BoxAnimated = Animated.createAnimatedComponent(Box)

class LoginScreen extends Component {
     state={
         opacity: new Animated.Value(0),
         position: new Animated.Value(0)

     }


     componentDidMount() {
         Animated.parallel([this.positionAnim(), this.opacityAnim()]).start()

     }

    opacityAnim = () => {
         Animated.timing(this.state.opacity,{
             toValue: 1,
             duration: 200,
             delay: 100
         }).start()
     }

     positionAnim = () => {
         Animated.timing(this.state.position,{
             toValue: 1,
             duration: 300,
             useNativeDriver: true,
         }).start()
     }

     onGoogleClick  = () => {
         Alert.alert('Please Sign In')
     }

       onFacebookClick  = async() => {
         try {
           const token = await FacebookApi.loginAsync()

             console.log('token', token)
         } catch (e) {
             console.log('error', error)
         }
     }

    render() {
        const {opacity} =this.state

        const logoTranslate =this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]
        })


        return (
            <Box f={1} center bg = "white">
                <Animated.View style = {{flex: 1, transform: [{
                    translateX: logoTranslate
                    }] }}>
                <Box f={1} center>
                <StartupLogo/>
                </Box>
                </Animated.View>

                <Animated.View style={{flex: 0.9,  width :"100%", opacity}}>
                <LogButtons onPress={this.onGoogleClick} type = "google">Continue with Google</LogButtons>
                    <LogButtons onPress={this.onFacebookClick} type = "facebook">Continue with Facebook</LogButtons>

                </Animated.View>
            </Box>
        );
    }
}

export default LoginScreen;