import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';

const containerStyle = css`
  margin: 8px 0 24px 0;
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

const rightSeparatorStyle = css`
  border-right-width: 2px;
  border-right-color: ${colors.green};
  border-right-style: solid;
  flex: 1;
`;

const leftSeparatorStyle = css`
  border-left-width: 2px;
  border-left-color: ${colors.green};
  border-left-style: solid;
  flex: 1;
`;

const pointAverageValueStyle = css`
  text-align: center;
  color: ${colors.blue};
  font-family: open-sans-extra-bold;
  font-size: 22px;
`;

const pointAverageHeaderStyle = css`
  text-align: center;
  color: ${colors.blue};
  font-family: open-sans-extra-bold;
  font-size: 11px;
  margin-bottom: 24px;
`;

interface IUserStatistics {
  won: number;
  money: number;
  hcp: number;
  played: number;
  percentWon: number;
  percentLost: number;
  averageScore: number;
}

export const UserStatistics = ({ won, money, hcp, played, percentWon, percentLost, averageScore }: IUserStatistics) => {
  return (
    <View style={containerStyle}>
      <Text style={pointAverageValueStyle}>{averageScore.toFixed(0)}</Text>
      <Text style={pointAverageHeaderStyle}>POINTS AVERAGE</Text>
      <View style={rowStyle}>
        <View style={rightSeparatorStyle}>
          <Text style={valueStyle}>{played}</Text>
        </View>
        <Text style={valueStyle}>{money}</Text>
        <View style={leftSeparatorStyle}>
          <Text style={valueStyle}>{hcp}</Text>
        </View>
      </View>
      <View style={rowStyle}>
        <Text style={headerStyle}>PLAYED</Text>
        <Text style={headerStyle}>$</Text>
        <Text style={headerStyle}>HCP</Text>
      </View>
      <View style={dividerStyle} />
      <View style={rowStyle}>
        <View style={rightSeparatorStyle}>
          <Text style={valueStyle}>{won}</Text>
        </View>
        <Text style={valueStyle}>{percentWon.toFixed(0)}</Text>
        <View style={leftSeparatorStyle}>
          <Text style={valueStyle}>{percentLost.toFixed(0)}</Text>
        </View>
      </View>
      <View style={rowStyle}>
        <Text style={headerStyle}>WIN</Text>
        <Text style={headerStyle}>WIN %</Text>
        <Text style={headerStyle}>MP %</Text>
      </View>
    </View>
  );
};
