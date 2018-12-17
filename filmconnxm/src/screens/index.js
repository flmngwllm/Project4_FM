import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {NavigationService} from "../logapi/NavigationService";


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

const TabNavigator = createBottomTabNavigator({
    Home: {
        getScreen: () => require('./HomeScreen').default,

    },

    Jobs: {
        getScreen: () => require('./JobsScreen').default,

    },
    Profile: {
        getScreen: () => require('./ProfileScreen').default,

    },
    Messages: {
        getScreen: () => require('./MessagesScreen').default,

    }

})

const MainNavigator = createStackNavigator({
    Tab: TabNavigator
})


const AppNavigator = createSwitchNavigator(
    {
    Splash: {
        getScreen: () => require('./SplashScreen').default,

    },

    Auth: AuthNavigator,
    Main: MainNavigator,
},
    {
        initialRouteName: 'Splash'
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