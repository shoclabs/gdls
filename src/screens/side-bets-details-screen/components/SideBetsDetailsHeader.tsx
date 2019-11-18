import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  margin: 0 15px;
`;

const nameStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  color: ${colors.darkBlue};
  margin-top: 20px;
`;

const balanceStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 64px;
  color: ${colors.blue};
  text-align: center;
  margin-top: 20px;
`;

const subHeaderStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
  text-align: center;
`;

interface ISideBetsDetailsHeader {
  name: string;
  balance: number;
}

export const SideBetsDetailsHeader = ({ name, balance }: ISideBetsDetailsHeader) => {
  return (
    <View style={containerStyle}>
      <Text style={nameStyle}>{name.toUpperCase()}</Text>
      <Text style={balanceStyle}>{`$${parseInt(balance.toFixed(2)).toLocaleString()}`}</Text>
      <Text style={subHeaderStyle}>BALANCE</Text>
    </View>
  );
};
