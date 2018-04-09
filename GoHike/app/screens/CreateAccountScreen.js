'use strict';

import React, { Component } from 'react';
import {Text, StyleSheet, View, Button, Image,
        TextInput, TouchableOpacity} from 'react-native';

export default class CreateAccountScreen extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    };
  }

  _onUsernameTextChanged = (event) => {
    this.setState({username: event.nativeEvent.text});
  };

  _onPasswordTextChanged = (event) => {
    this.setState({password: event.nativeEvent.text});
  };

  _onConfirmPasswordTextChanged = (event) => {
    this.setState({confirmPassword: event.nativeEvent.text});
  };

  _onCreateAccountButtonPressed = () => {
    console.log('Create Account button pressed');
    this._createAccount();
  };

  _createAccount = () => {
    console.log('Creating account...');
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
          <TextInput
            style={styles.input}
            value={this.state.confirmPassword}
            onChange={this._onConfirmPasswordTextChanged}
            placeholder='Confirm Password'/>
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={this._onCreateAccountButtonPressed}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
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
    height: 250,
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
  createAccountButton: {
    width: 150,
    height: 50,
    backgroundColor: '#58D87A',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createAccountButtonText: {
    fontSize: 18,
    alignItems: 'center'
  }
});
