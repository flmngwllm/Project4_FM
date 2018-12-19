import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import {StatusBar} from "react-native"




class JobDescription extends Component {
    state={}

    render() {


        return (



           <Box f={1} center>

                <StatusBar barStyle = "light-content"/>
                <Text>JobsDescription </Text>



            </Box>
        );
    }
}

export default JobDescription;