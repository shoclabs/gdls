import React from 'react';
import { Text, Image, View } from 'react-native';
import { Content, Container } from 'native-base';
import { css } from 'css-rn';

import { LoginForm } from './components/LoginForm';

import { colors } from '../../theme/colors';
import { authStore } from '../../stores/auth-store';

const headerImage = require('./images/login-header.png');

const headerContainerStyle = css`
  background-color: ${colors.green};
  display: flex;
  align-items: center;
`;

const descriptionContainerStyle = css`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

const descriptionStyle = css`
  width: 268px;
  font-family: open-sans-regular;
  font-size: 17px;
  color: ${colors.darkBlue};
  text-align: center;
`;

const markedTextStyle = css`
  font-family: open-sans-bold;
`;

export const LoginScreen = () => {
  return (
    <Container>
      <View style={headerContainerStyle}>
        <Image source={headerImage} />
      </View>
      <Content padder>
        <View style={descriptionContainerStyle}>
          <Text style={descriptionStyle}>
            Welcome to <Text style={markedTextStyle}>Golf de los Sábados. </Text>
            Please enter your email and the
            password provided by an administrator:
          </Text>
        </View>
        <LoginForm onLogin={authStore.setAuthData} />
      </Content>
    </Container>
  );
};
