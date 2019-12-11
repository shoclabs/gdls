import React from 'react';
import { Container, Content, Drawer } from 'native-base';
import { Route } from 'react-router-native';
import * as Font from 'expo-font';
import { useAsync } from 'react-async-hook'

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
import { CreateHoleInOneScreen } from './create-hole-in-one-screen/CreateHoleInOneScreen';
import { HoleInOneScreen } from './hole-in-one-screen/HoleInOneScreen';
import { SideBetsScreen } from './side-bets-screen/SideBetsScreen';
import { CreateBetScreen } from './create-bet-screen/CreateBetScreen';
import { SideBetsDetailsScreen } from './side-bets-details-screen/SideBetsDetailsScreen';
import { authStore } from '../stores/auth-store';
import { observer } from 'mobx-react';

async function loadFonts() {
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
}

export const MainRouter = observer((props) => {
  const { loading: loadingFonts } = useAsync(loadFonts, []);

  const handleOpen = () => this.drawer._root.open();

  const handleClose = () => this.drawer._root.close();

  if (loadingFonts) {
    return null;
  }

  if (!authStore.isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<DrawerPanel onCloseDrawer={handleClose} />}
      onClose={handleClose}
    >
      <Container>
        <Header onOpenDrawer={handleOpen} />
        <Content>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/enter-score" component={EnterScoreScreen} />
          <Route path="/weekly-boards" component={WeeklyBoardsScreen} />
          <Route path="/my-profile" component={MyProfileScreen} />
          <Route path="/settings-screen" component={SettingsScreen} />
          <Route exact path="/holes-in-one/:playerId" component={HolesInOneByPlayerScreen} />
          <Route exact path="/hole-in-one/:holeId" component={HoleInOneScreen} />
          <Route exact path="/holes-in-one" component={HolesInOneScreen} />
          <Route exact path="/side-bets" component={SideBetsScreen} />
          <Route exact path="/side-bets/:sideBetsId" component={SideBetsDetailsScreen} />
          <Route path="/create-side-bet" component={CreateBetScreen} />
          <Route path="/create-hole-in-one" component={CreateHoleInOneScreen} />
          <Route path="/change-password" component={ChangePasswordScreen} />
        </Content>
        <BottomNavigation />
      </Container>
    </Drawer>
  );
});
