import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import {StatusBar} from "react-native"


class SettingsScreen extends Component {
    state={}

    render() {


        return (
            <Box f={1} center>
                <StatusBar barStyle = "light-content"/>

                <Text>SettingsScreen </Text>
            </Box>
        );
    }
}

export default SettingsScreen;