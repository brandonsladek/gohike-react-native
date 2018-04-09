'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';

export default class LandingScreen extends Component<{}> {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: ''
    };
  }

  _onLoginPressed = () => {
    console.log('Login pressed');
    this.props.navigator.push({
        title: 'Login',
        component: LoginScreen,
        passProps: {}
      });
  };

  _onCreateAccountPressed = () => {
    console.log('Create account pressed');
    this.props.navigator.push({
        title: 'Create Account',
        component: CreateAccountScreen,
        passProps: {}
      });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.optionsContainer}>
          <Button style={styles.button}
            onPress={this._onLoginPressed}
            color='#000000'
            title='Login'
          />
          <Image source={require('../../images/landing-page-mountains.png')} style={styles.image}/>
          <Button style={styles.button}
            onPress={this._onCreateAccountPressed}
            color='#000000'
            title='Create Account'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#58D87A'
  },
  optionsContainer: {
    padding: 30,
    marginTop: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 150,
    height: 50,
  },
  image: {
    width: 80,
    height: 80,
  }
});
