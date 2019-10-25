import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base';
import { Route } from 'react-router-native';
import * as Font from 'expo-font';

import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { HomeScreen } from './home-screen/HomeScreen';
import { EnterScoreScreen } from './enter-score-screen/EnterScoreScreen';
import { WeeklyBoardsScreen } from './weekly-boards-screen/WeeklyBoardsScreen';
import { LoginScreen } from './login-screen/LoginScreen';

export class MainRouter extends Component {
  state = { fontLoaded: false, isLoggedIn: false };

  async componentDidMount() {
    await this.loadLoggedInCredentials();
    await Font.loadAsync({
      'open-sans-bold': require('../theme/fonts/OpenSans-Bold.ttf'),
      'open-sans-bold-italic': require('../theme/fonts/OpenSans-BoldItalic.ttf'),
      'open-sans-extra-bold': require('../theme/fonts/OpenSans-ExtraBold.ttf'),
      'open-sans-extra-bold-italic': require('../theme/fonts/OpenSans-ExtraBoldItalic.ttf'),
      'open-sans-italic': require('../theme/fonts/OpenSans-Italic.ttf'),
      'open-sans-light': require('../theme/fonts/OpenSans-Light.ttf'),
      'open-sans-light-italic': require('../theme/fonts/OpenSans-LightItalic.ttf'),
      'open-sans-regular': require('../theme/fonts/OpenSans-Regular.ttf'),
      'open-sans-semi-bold': require('../theme/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-semi-bold-italic': require('../theme/fonts/OpenSans-SemiBoldItalic.ttf'),
      'open-sans-condensed-bold': require('../theme/fonts/OpenSansCondensed-Bold.ttf'),
      'open-sans-condensed-light': require('../theme/fonts/OpenSansCondensed-Light.ttf'),
      'open-sans-condensed-light-italic': require('../theme/fonts/OpenSansCondensed-LightItalic.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  loadLoggedInCredentials = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null) {
        this.setState({ isLoggedIn: true });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    const { fontLoaded, isLoggedIn } = this.state;
    if (!fontLoaded) {
      return null;
    }
    if (!isLoggedIn) {
      return <LoginScreen />;
    }
    return (
      <Container>
        <Header />
        <Content>
          <Route path="/home" component={HomeScreen} />
          <Route path="/enter-score" component={EnterScoreScreen} />
          <Route path="/weekly-boards" component={WeeklyBoardsScreen} />
        </Content>
        <BottomNavigation />
      </Container>
    );
  }
}