import React from 'react';
import { Platform } from 'react-native';
import { Button, Icon, Left, Header as NativeHeader, Right } from 'native-base';
import { css } from 'css-rn';
import { withRouter, RouteComponentProps } from 'react-router';

import { colors } from '../../theme/colors';

const containerStyle = onHomeScreen => css`
  background-color: ${onHomeScreen ? colors.blue : colors.green};
  ${Platform.OS === 'android' ? 'height: 80px;' : ''}
`;

const contentStyle = css`
  ${Platform.OS === 'android' ? 'margin-top: 35px;' : ''}
`;

const iconStyle = css`
  color: white;
  margin: 0 0 8px 25px;
`;

interface IHeaderProps extends RouteComponentProps<any>{
  onOpenDrawer(): void;
}

export const Header = withRouter<IHeaderProps, any>(({ location: { pathname }, onOpenDrawer }) => {
  return (
    <NativeHeader
      style={containerStyle(pathname === '/')}
    >
      <Left style={contentStyle}>
        <Button transparent onPress={onOpenDrawer}>
          <Icon name='menu' style={iconStyle} />
        </Button>
      </Left>
      <Right />
    </NativeHeader>
  )
});
