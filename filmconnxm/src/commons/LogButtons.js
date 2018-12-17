import {TouchableOpacity, Image} from "react-native";
import {Box , Text} from "react-native-design-utility";
import React from "react";
import {images} from "../constants/images";


const bgColor = type => {
    switch (type) {
        case 'google':
            return 'blue'
         case 'facebook':
            return 'green'
        default:
            return 'white'
    }
}

const LogButtons = ({children, type, onPress}) => (
<TouchableOpacity onPress = {onPress}>
    <Box dir="row" shadow={1} bg="blue" w="80%" align="center" p="xs" radius="xs" self="center" mb="sm">
        <Box mr="sm">
            <Box bg="white" h={32} w={32} radius="xs" center>

                {type === 'google' && <Image source={images.google} />}
            </Box>
        </Box>
        <Box>

            <Text size = "md" color = "white">
                {children}
            </Text>
        </Box>
    </Box>
</TouchableOpacity>
)


export default LogButtons
