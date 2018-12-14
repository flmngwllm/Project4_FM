import React, {Component} from 'react';
import {Scene, Stack, Actions, Router} from "react-native-router-flux";
import Login from  './components/Login'
import Home from  './components/Home'
import Register from  './components/Register'
import {StyleSheet, StatusBar} from 'react-native'



const RouterComponent = () => {
  return (
      <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Sign In" initial/>
      <Scene key="register" component={Register} title="Register"/>
      <Scene key="home" component={Home} title="Home" initial/>
    </Stack>
  </Router>
        );

}

export default RouterComponent;