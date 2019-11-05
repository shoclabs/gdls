import React from 'react';
import { Icon, View, Button } from 'native-base';
import { css } from 'css-rn';
import { withRouter } from 'react-router';

import { colors } from '../../theme/colors';

const containerStyle = css`
  height: 45px;
  background-color: ${colors.lightGrey};
`;

const backStyle = css`
  font-size: 26px;
  margin-left: 38px;
  color: #bcbcbc;
`;

export const GoBackBar = withRouter(({ history }) => (
  <View style={containerStyle}>
    <Button transparent onPress={history.goBack}>
      <Icon name="arrow-back" style={backStyle} />
    </Button>
  </View>
));
