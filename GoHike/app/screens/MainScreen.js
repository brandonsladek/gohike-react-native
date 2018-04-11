'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import HikeCollection from '../components/HikeCollection';
import RankingsContainer from '../components/RankingsContainer';
import ProfileContainer from '../components/ProfileContainer';

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
  
  render() {
    return (
      <Swiper
        loop={true}
        showsPagination={false}
        index={1}>
        <ProfileContainer>
          <TitleText label="Profile" />
        </ProfileContainer>
        <HikeCollection>
          <TitleText label="Hikes" />
        </HikeCollection>
        <RankingsContainer>
          <TitleText label="Rankings" />
        </RankingsContainer>
      </Swiper>
    )
  }
}
