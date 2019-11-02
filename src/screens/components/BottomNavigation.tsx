import React from 'react';
import { Image, Platform } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { css } from 'css-rn';
import { withRouter } from 'react-router-native';

import { colors } from '../../theme/colors';

const homeIcon = require('./icons/home.png');
const homeIconSelected = require('./icons/home-selected.png');
const plusIcon = require('./icons/plus.png');
const plusIconSelected = require('./icons/plus-selected.png');
const boardIcon = require('./icons/board.png');
const boardIconSelected = require('./icons/board-selected.png');


const containerStyle = onHomeScreen => css`
  background-color: ${onHomeScreen ? colors.blue : colors.green};
  ${Platform.OS === 'android' ? 'height: 85px;' : ''}
`;

const navigationStyle = isSelected => css`
  color: ${isSelected ? colors.yellow : 'white'};
  font-family: open-sans-condensed-bold;
  font-size: 12px;
  margin-top: 4px;
`;

const iconStyle = css`
  width: 25px;
  height: 25px;
`;

export const BottomNavigation = withRouter(({ history: { push, location: { pathname } } }) => (
  <Footer style={containerStyle(pathname === '/')}>
    <FooterTab style={containerStyle(pathname === '/')}>
      <Button onPress={() => push('/')}>
        <Image source={pathname === '/' ? homeIconSelected : homeIcon} style={iconStyle} />
        <Text style={navigationStyle(pathname === '/')}>HOME</Text>
      </Button>
      <Button onPress={() => push('/enter-score')}>
        <Image source={pathname.startsWith('/enter-score') ? plusIconSelected : plusIcon} style={iconStyle} />
        <Text style={navigationStyle(pathname.startsWith('/enter-score'))}>ENTER SCORE</Text>
      </Button>
      <Button onPress={() => push('/weekly-boards')}>
        <Image source={pathname === '/weekly-boards' ? boardIconSelected : boardIcon} style={iconStyle} />
        <Text style={navigationStyle(pathname === '/weekly-boards')}>WEEKLY BOARDS</Text>
      </Button>
    </FooterTab>
  </Footer>
));
