import React from 'react';
import { Footer, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { css } from 'css-rn';

import { colors } from '../../../../theme/colors';

const footerStyle = css`
  background-color: ${colors.darkBlue};
  border-color: ${colors.darkBlue};
`;

const tabHereStyle = css`
  color: white;
  font-family: open-sans-regular;
  font-size: 14px;
`;

const buttonStyle = css`
  flex-direction: row;
`;

const buttonTextStyle = css`
  color: white;
  font-family: open-sans-extra-bold;
  font-size: 14px;
`;

export const LogoutSection = () => (
  <Footer style={footerStyle}>
    <TouchableOpacity style={buttonStyle}>
      <Text style={tabHereStyle}>Tab here to </Text>
      <Text style={buttonTextStyle}>log out</Text>
    </TouchableOpacity>
  </Footer>
);
