import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import {StatusBar} from "react-native"
import SearchBar from "../components/SearchBar"
import ListItems from "../components/ListItems";



class JobsScreen extends Component {
    state={}

    render() {


        return (



            <Box f={1} >
                <SearchBar/>

                <Text>JobsScreen </Text>



            </Box>
        );
    }
}

export default JobsScreen;