'use strict';

import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class HikeCollection extends Component {

  constructor(props) {
    super(props);
  }

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {
    return (
      <View style={this.viewStyle()}>
        <Text>Hikes</Text>
      </View>
    )
  }
}
