import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';

const containerStyle = css`
  margin: 24px 0;
`;

const rowStyle = css`
  flex-direction: row;
  padding: 0 15px;
  width: 100%;
`;

const valueStyle = css`
  text-align: center;
  flex: 1;
  font-family: open-sans-extra-bold;
  font-size: 22px;
  color: ${colors.blue};
`;

const headerStyle = css`
  text-align: center;
  flex: 1;
  font-family: open-sans-extra-bold;
  font-size: 11px;
  color: ${colors.blue};
`;

const dividerStyle = css`
  margin-top: 20px;
`;

interface IUserStatistics {
  won: number;
  money: number;
  hcp: number;
  played: number;
  percentWon: number;
  percentLost: number;
}

export const UserStatistics = ({ won, money, hcp, played, percentWon, percentLost }: IUserStatistics) => (
  <View style={containerStyle}>
    <View style={rowStyle}>
      <Text style={valueStyle}>{played}</Text>
      <Text style={valueStyle}>{money}</Text>
      <Text style={valueStyle}>{hcp}</Text>
    </View>
    <View style={rowStyle}>
      <Text style={headerStyle}>PLAYED</Text>
      <Text style={headerStyle}>$</Text>
      <Text style={headerStyle}>HCP</Text>
    </View>
    <View style={dividerStyle} />
    <View style={rowStyle}>
      <Text style={valueStyle}>{won}</Text>
      <Text style={valueStyle}>{percentWon}</Text>
      <Text style={valueStyle}>{percentLost}</Text>
    </View>
    <View style={rowStyle}>
      <Text style={headerStyle}>WIN</Text>
      <Text style={headerStyle}>WIN %</Text>
      <Text style={headerStyle}>LOSS %</Text>
    </View>
  </View>
);
