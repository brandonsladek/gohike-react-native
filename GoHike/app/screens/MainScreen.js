'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
//import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}

export default class Main extends React.Component {

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
      <View><Text>main screen</Text></View>
      /*
      <Swiper
        loop={true}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>
          <TitleText label="Profile" />
        </View>
        <View style={this.viewStyle()}>
          <TitleText label="Hikes" />
        </View>
        <View style={this.viewStyle()}>
          <TitleText label="Rankings" />
        </View>
      </Swiper>
      */
    )
  }
}
