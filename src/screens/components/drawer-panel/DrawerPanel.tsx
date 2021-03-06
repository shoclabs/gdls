import React from 'react';
import { Platform } from 'react-native';
import { Button, Container, Content, Icon, View } from 'native-base';
import { css } from 'css-rn';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { get } from 'lodash';

import { ProfileSection } from './components/ProfileSection';
import { MenuSection } from './components/MenuSection';
import { LogoutSection } from './components/LogoutSection';

import { colors } from '../../../theme/colors';
import { authStore } from '../../../stores/auth-store';

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
  ${Platform.OS === 'android' ? 'margin-top: 35px;' : ''}
`;

const profileContainerStyle = css`
  margin-top: 60px;
`;

const menuContainerStyle = css`
  margin-top: 100px;
`;

const GET_ME = gql`
  {
    me {
      id
      email
      firstName
      lastName
      location
      avatar {
        id
        contentBase64
      }
    }
  }
`;

export const DrawerPanel = ({ onCloseDrawer }) => {
  const { data } = useQuery(GET_ME);

  const apolloClient = useApolloClient();

  if (!data) {
    return null;
  }

  async function handleLogout() {
    authStore.setAuthData(undefined, undefined);
    await apolloClient.resetStore();
  }

  return (
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
          <ProfileSection user={get(data, 'me')} />
        </View>
        <View style={menuContainerStyle}>
          <MenuSection onClose={onCloseDrawer} />
        </View>
      </Content>
      <LogoutSection onLogout={handleLogout} />
    </Container>
  );
};
