import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import React, {Component} from 'react'
import {NavigationService} from "../logapi/NavigationService";
import BarTab from "../components/BarTab";
import {theme} from "../constants/theme"


const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require("./LoginScreen").default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  });

const JobsStack = createStackNavigator(
    {
        Jobs: {
            getScreen: () => require("./JobsScreen").default,
        },
//
//         Description: {
//             getScreen: () => require("./JobDescription").default,
//         },

    }
);

const TabNavigator = createBottomTabNavigator({



   Jobs: JobsStack,

    Profile: {
        getScreen: () => require('./ProfileScreen').default,

    },
    Messages: {
        getScreen: () => require('./MessagesScreen').default,
    },

    Connections: {
        getScreen: () => require('./ConnectionsScreen').default,


    },

}, {
    barTabComponent: props => <BarTab {...props} />,
    }
);



const MainNavigator = createStackNavigator({
    Tab: TabNavigator

}, {


});



const AppNavigator = createSwitchNavigator(
    {
    Login: {
        getScreen: () => require('./LoginScreen').default,

    },
        Auth: AuthNavigator,
        Main: MainNavigator,

},
    {
        initialRouteName: 'Login'
    }

)


class Navigation extends Component{
    state = {}
    render(){
        return(
        <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
        )
    }
}

export default Navigation;