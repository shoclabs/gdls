import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';

const containerStyle = css`
  height: 60px;
  flex-direction: row;
  align-items: center;
  min-width: 100%;
  justify-content: space-between;
`;

const leftHeaderStyle = removeRank => css`
  flex-direction: row;
  width: ${removeRank ? 170 : 232}px;
  ${removeRank ? 'margin-left: 20px;' : ''}
`;

const rightHeaderStyle = css`
  flex-direction: row;
`;

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
`;

const rankStyle = css`
  width: 62px;
`;

const centerTextStyle = css`
  text-align: center;
`;

const playerStyle = css`
  width: 94px;
  padding-left: 48px;
`;

const cellHeaderStyle = css`
  width: 70px;
`;

interface ITableHeader {
  headers: Array<string>;
  removeRank?: boolean;
}

export const TableHeader = ({ headers, removeRank }: ITableHeader) => (
  <View style={containerStyle}>
    <View style={leftHeaderStyle(removeRank)}>
      {!removeRank &&
        <View style={rankStyle}>
          <Text style={[textStyle, centerTextStyle]}>Rank</Text>
        </View>}
      <View style={playerStyle}>
        <Text style={textStyle}>Player</Text>
      </View>
    </View>
    <View style={rightHeaderStyle}>
      {headers.map(header => (
        <View style={cellHeaderStyle} key={header}>
          <Text style={[textStyle, centerTextStyle]}>{header}</Text>
        </View>
      ))}
    </View>
  </View>
);
