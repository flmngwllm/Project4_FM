import React, {Component} from 'react';
import {Text, Box} from "react-native-design-utility";
import {StatusBar} from "react-native"



class ProfileScreen extends Component {
    render() {
        return (
    <Box f={1} center>
    <StatusBar barStyle = "light-content"/>
               <Text>
                   JobTitle(s)
               </Text>
               <Text>
                   Department(s)
               </Text>
               <Text>
                   Resume
               </Text>
                <Text>
                   Bio
               </Text>
               <Text>
                   Affiliated Groups
               </Text>
                <Text>
                   Projects
               </Text>
           </Box>
        );
    }
}

export default ProfileScreen;