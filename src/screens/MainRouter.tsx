import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Drawer } from 'native-base';
import { Route } from 'react-router-native';
import * as Font from 'expo-font';

import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { HomeScreen } from './home-screen/HomeScreen';
import { EnterScoreScreen } from './enter-score-screen/EnterScoreScreen';
import { WeeklyBoardsScreen } from './weekly-boards-screen/WeeklyBoardsScreen';
import { LoginScreen } from './login-screen/LoginScreen';
import { DrawerPanel } from './components/drawer-panel/DrawerPanel';
import { MyProfileScreen } from './my-profile-screen/MyProfileScreen';
import { SettingsScreen } from './settings-screen/SettingsScreen';
import { HolesInOneByPlayerScreen } from './holes-in-one-by-player-screen/HolesInOneByPlayerScreen';
import { HolesInOneScreen } from './holes-in-one-screen/HolesInOneScreen';
import { ChangePasswordScreen } from './change-password-screen/ChangePasswordScreen';

export class MainRouter extends Component {
  state = { fontLoaded: false, isLoggedIn: false };

  async componentDidMount() {
    await this.loadLoggedInCredentials();
    await Font.loadAsync({
      'Roboto_medium': require('../theme/fonts/Roboto_medium.ttf'),
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
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        this.setState({ isLoggedIn: true });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  handleLogin = async (token, userId) => {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('userId', userId);
    this.setState({ isLoggedIn: true });
  };

  handleLogout = async () => {
    const { client } = this.props;
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    this.setState({ isLoggedIn: false });
    await client.resetStore();
  };

  handleOpen = () => this.drawer._root.open();

  handleClose = () => this.drawer._root.close();

  render() {
    const { fontLoaded, isLoggedIn } = this.state;
    if (!fontLoaded) {
      return null;
    }
    if (!isLoggedIn) {
      return <LoginScreen onLogin={this.handleLogin} />;
    }
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerPanel onCloseDrawer={this.handleClose} onLogout={this.handleLogout} />}
        onClose={this.handleClose}
      >
        <Container>
          <Header onOpenDrawer={this.handleOpen} />
          <Content>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/enter-score" component={EnterScoreScreen} />
            <Route path="/weekly-boards" component={WeeklyBoardsScreen} />
            <Route path="/my-profile" component={MyProfileScreen} />
            <Route path="/settings-screen" component={SettingsScreen} />
            <Route path="/holes-in-one-by-player" component={HolesInOneByPlayerScreen} />
            <Route path="/holes-in-one" component={HolesInOneScreen} />
            <Route path="/change-password" component={ChangePasswordScreen} />
          </Content>
          <BottomNavigation />
        </Container>
      </Drawer>
    );
  }
}
