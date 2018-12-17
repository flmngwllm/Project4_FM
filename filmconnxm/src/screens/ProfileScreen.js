import React, {Component} from 'react';
import {Text, Box} from "react-native-design-utility";


class ProfileScreen extends Component {
    render() {
        return (
           <Box>
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