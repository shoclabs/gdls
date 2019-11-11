import React from 'react';
import { Image, Platform } from 'react-native';
import { Button, Icon, Left, Header as NativeHeader, Right } from 'native-base';
import { css } from 'css-rn';
import { withRouter, RouteComponentProps } from 'react-router';

import { colors } from '../../theme/colors';

const plusIcon = require('./icons/plus-outline.png');

const containerStyle = onHomeScreen => css`
  background-color: ${onHomeScreen ? colors.blue : colors.green};
  ${Platform.OS === 'android' ? 'height: 80px;' : ''}
`;

const contentStyle = css`
  ${Platform.OS === 'android' ? 'margin-top: 35px;' : ''}
`;

const menuIconStyle = css`
  color: white;
  margin: 0 0 8px 25px;
`;

const plusIconStyle = css`
  width: 18px;
  height: 18px;
  margin: 6px 15px 0 0;
`;

interface IHeaderProps extends RouteComponentProps<any>{
  onOpenDrawer(): void;
}

export const Header = withRouter<IHeaderProps, any>(({ location: { pathname }, onOpenDrawer, history }) => {
  return (
    <NativeHeader
      style={containerStyle(pathname === '/')}
    >
      <Left style={contentStyle}>
        <Button transparent onPress={onOpenDrawer}>
          <Icon name='menu' style={menuIconStyle} />
        </Button>
      </Left>
      <Right>
        {pathname === '/holes-in-one' &&
          <Button transparent onPress={() => history.push('/create-hole-in-one')}>
            <Image source={plusIcon} style={plusIconStyle} />
          </Button>}
      </Right>
    </NativeHeader>
  )
});
