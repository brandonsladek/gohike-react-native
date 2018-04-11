'use strict';

import { Navigation } from 'react-native-navigation';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import MainScreen from './screens/MainScreen';

export default () => {
  Navigation.registerComponent('LandingScreen', () => LandingScreen);
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('CreateAccountScreen', () => CreateAccountScreen);
  Navigation.registerComponent('MainScreen', () => MainScreen);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'LandingScreen', // unique ID registered with Navigation.registerScreen
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
};
