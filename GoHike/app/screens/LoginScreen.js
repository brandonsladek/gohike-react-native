'use strict';

import React, { Component } from 'react';
import {Text, StyleSheet, View, Button, Image,
        TextInput, TouchableOpacity} from 'react-native';
import MainScreen from './MainScreen';

export default class LoginScreen extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  _onUsernameTextChanged = (event) => {
    this.setState({username: event.nativeEvent.text});
  };

  _onPasswordTextChanged = (event) => {
    this.setState({password: event.nativeEvent.text});
  };

  _onLoginButtonPressed = () => {
    console.log('Login button pressed');
    this._checkLoginCredentials();
    this.props.navigator.push({
        screen: 'MainScreen',
        backButtonHidden: true,
        navigatorStyle: { navBarHidden: true }
      });
  };

  _checkLoginCredentials = () => {
    console.log('Checking login credentials...');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChange={this._onUsernameTextChanged}
            placeholder='Username'/>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChange={this._onPasswordTextChanged}
            placeholder='Password'/>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this._onLoginButtonPressed}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 80
  },
  inputContainer: {
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 18,
    backgroundColor: '#DDDDDD',
    alignItems: 'flex-start'
  },
  loginButton: {
    width: 150,
    height: 50,
    backgroundColor: '#58D87A',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    fontSize: 18,
    alignItems: 'center'
  }
});
