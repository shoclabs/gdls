import React from 'react';
import { Image } from 'react-native';
import { Button, Text, View } from 'native-base';
import { withRouter } from 'react-router';
import { css } from 'css-rn';

import { Badge } from './Badge';
import { PlayerCell } from './PlayerCell';

import { colors } from '../../../theme/colors';

const nextIcon = require('../assets/next.png');

const containerStyle = css`
  flex-direction: row;
  height: 46px;
  justify-content: space-between;
`;

const leftContentStyle = css`
  width: 154px;
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

const rightContentStyle = css`
  width: 107px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const textMoneyStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
`;

const nextButton = css`
  width: 25px;
  height: 25px;
  margin-right: 30px;
`;

const nextIconStyle = css`
  width: 25px;
  height: 25px;
`;

export const HolesInOneRow = withRouter(({ history }) => {
  return (
    <View style={containerStyle}>
      <View style={leftContentStyle}>
        <Badge rank={1} />
        <PlayerCell firstName="Johnny" lastName="Morton" />
      </View>
      <View style={rightContentStyle}>
        <Text style={textMoneyStyle}>60,000</Text>
        <Button style={nextButton} transparent onPress={() => history.push('/holes-in-one-by-player')}>
          <Image style={nextIconStyle} source={nextIcon} />
        </Button>
      </View>
    </View>
  );
});
