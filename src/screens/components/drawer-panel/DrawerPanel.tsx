import React from 'react';
import { Button, Container, Content, Icon, View } from 'native-base';
import { css } from 'css-rn';

import { ProfileSection } from './components/ProfileSection';
import { MenuSection } from './components/MenuSection';
import { LogoutSection } from './components/LogoutSection';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  background-color: ${colors.darkBlue};
`;

const contentStyle = css`
  flex: 1;
  top: -1px;
`;

const closeIconStyle = css`
  color: white;
  font-size: 36px;
  padding-right: 8px;
`;

const closeContainerStyle = css`
  align-items: flex-end;
`;

const profileContainerStyle = css`
  margin-top: 60px;
`;

const menuContainerStyle = css`
  margin-top: 100px;
`;

export const DrawerPanel = ({ onCloseDrawer, onLogout }) => (
  <Container style={containerStyle}>
    <Content
      bounces={false}
      style={contentStyle}
    >
      <View style={closeContainerStyle}>
        <Button transparent onPress={onCloseDrawer}>
          <Icon name="close" style={closeIconStyle} />
        </Button>
      </View>
    <View style={profileContainerStyle}>
      <ProfileSection />
    </View>
    <View style={menuContainerStyle}>
      <MenuSection />
    </View>
    </Content>
    <LogoutSection onLogout={onLogout} />
  </Container>
);