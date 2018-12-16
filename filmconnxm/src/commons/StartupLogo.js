import {images} from "../constants/images";
import {Image} from 'react-native'
import {Box, Text} from 'react-native-design-utility'
import React from "react";

const StartupLogo = () => (
     <Box center>
                <Image source={images.logo}/>
                <Text>Post.Apply.Connect</Text>
            </Box>
)


export default StartupLogo