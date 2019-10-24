import React from 'react';
import { Button, Icon, Left, Header as NativeHeader, Right } from 'native-base';
import { css } from 'css-rn';
import { withRouter } from 'react-router';

import { colors } from '../../theme/colors';

const containerStyle = onHomeScreen => css`
  background-color: ${onHomeScreen ? colors.blue : colors.green};
`;

const iconStyle = css`
  color: white;
  margin: 0 0 8px 25px;
`;

export const Header = withRouter(({ location: { pathname } }) => (
  <NativeHeader
    style={containerStyle(pathname === '/home')}
  >
    <Left>
      <Button transparent>
        <Icon name='menu' style={iconStyle} />
      </Button>
    </Left>
    <Right />
  </NativeHeader>
));
