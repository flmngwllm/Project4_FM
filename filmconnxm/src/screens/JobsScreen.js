import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
 import {StatusBar} from "react-native"
import SearchBar from "../components/SearchBar"
import ListItems from "../components/ListItems";
import MultiTab from "../components/MultiTab";



class JobsScreen extends Component {
    static navigationOptions = {
        title: 'Jobs'
    }
    state={}

    render() {


        return (



            <Box f={1} barStyle = "light-content" >
                <StatusBar/>
                <SearchBar/>




            </Box>
        );
    }
}

export default JobsScreen;