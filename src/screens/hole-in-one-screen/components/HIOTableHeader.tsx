import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  height: 70px;
  flex-direction: row;
  padding-top: 40px;
`;

const leftContentStyle = css`
  flex: 1;
`;

const rightContentStyle = css`
  flex: 1;
`;

const playerTextStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
  margin-left: 77px;
`;

const paidTextStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
  text-align: center;
`;

export const HIOTableHeader = () => {
  return (
    <View style={containerStyle}>
      <View style={leftContentStyle}>
        <Text style={playerTextStyle}>Player</Text>
      </View>
      <View style={rightContentStyle}>
        <Text style={paidTextStyle}>Paid?</Text>
      </View>
    </View>
  )
};
