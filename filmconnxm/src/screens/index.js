import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import React, {Component} from 'react'
import {NavigationService} from "../logapi/NavigationService";
import BarTab from "../components/BarTab";


const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require("./LoginScreen").default,
    },
  },
  {

  });


const TabNavigator = createBottomTabNavigator({

    Home: {
        getScreen: () => require("./HomeScreen").default,


    },

    Jobs: {
        getScreen: () => require('./JobsScreen').default,

    },
    Profile: {
        getScreen: () => require('./ProfileScreen').default,

    },
    Messages: {
        getScreen: () => require('./MessagesScreen').default,
    },
  },
  {
    barTabComponent: props => <BarTab {...props} />,
  },
);



const MainNavigator = createStackNavigator({
    Tab: TabNavigator
// }, {
//     navigationOptions : {
//         headerStyle: {
//             backgroundColor: theme.color.green,
//         }
//     }
});



const AppNavigator = createSwitchNavigator(
    {
    Jobs: {
        getScreen: () => require('./LoginScreen').default,

    },
        Auth: AuthNavigator,
        Main: MainNavigator,

},
    {
        initialRouteName: 'Jobs'
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