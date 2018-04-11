'use strict';

import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class ProfileContainer extends Component {

  constructor(props) {
    super(props);
  }

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: '#58D87A',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {
    return (
      <View style={this.viewStyle()}>
        <Text>Profile</Text>
      </View>
    )
  }
}
