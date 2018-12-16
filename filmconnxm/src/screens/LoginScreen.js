import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import StartupLogo from "../commons/StartupLogo";
import {TouchableOpacity} from "react-native";

class LoginScreen extends Component {
     state={}

    render() {


        return (
            <Box f={1} center bg = "white">
                <Box f={1} center>
                <StartupLogo/>
                </Box>

                <Box f={0.9}  w = "100%">
                    <TouchableOpacity>
                        <Box dir ="row" shadow ={1} bg = "blue"  w = "80%" align = "center" p ="xs" radius = "xs" self = "center">
                             <Box mr ="sm">
                            <Box bg= "white" h={32} w={32} radius = "xs" center>

                                <Text>G</Text>
                            </Box>
                            </Box>
                            <Box>

                            <Text>Continue With Google</Text>
                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
        );
    }
}

export default LoginScreen;