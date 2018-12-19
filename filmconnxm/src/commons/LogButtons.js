import {TouchableOpacity, Image} from "react-native";
import {Box , Text} from "react-native-design-utility";
import React from "react";
import {images} from "../constants/images";
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../constants/theme';



const bgColor = type => {
    switch (type) {
        case 'google':
            return 'blue'
         case 'facebook':
            return 'blueDark'
        default:
            return 'white'
    }
}

const LogButtons = ({children, type, onPress}) => (
<TouchableOpacity onPress = {onPress}>
    <Box dir="row" shadow={1} bg={bgColor(type)} w="80%" align="center" p="xs" radius="xs" self="center" mb="sm">
        <Box mr="sm">
            <Box bg="white" h={32} w={32} radius="xs" center style={{position: 'relative'}}>

                {type === 'google' && <Image source={images.google} />}
                {type === 'facebook' && <FontAwesome name="facebook" color={theme.color.blueDark} size={30} style={{position: 'absolute', right: 5, bottom: -3}} />}

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
