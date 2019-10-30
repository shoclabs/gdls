import React from 'react';
import { View as NativeView } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { TableRowLeftContent } from '../../components/TableRowLeftContent';

import { colors } from '../../../theme/colors';

const containerStyle = isGrey => css`
  height: 46px;
  flex-direction: row;
  align-items: center;
  background-color: ${isGrey ? colors.lightGrey : 'white'};
  width: 650px;
`;

const rightContentStyle = css`
  flex-direction: row;
  width: 143px;
`;

const textStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
  padding-right: 10px;
`;

const centerTextStyle = css`
  text-align: center;
`;

const dataCellStyle = css`
  width: 70px;
`;

interface ITableRow {
  rank: number;
  played: number;
  won: number;
  lost: number;
  percentWon: number;
  percentLost: number;
  money: number;
  fullName: string;
  isWinner?: boolean;
  isLooser?: boolean;
}

export const TableRow = ({ rank, played, won, lost, fullName, isWinner, isLooser, percentWon, percentLost, money }: ITableRow) => (
  <NativeView style={containerStyle(rank % 2 === 1)}>
    <TableRowLeftContent
      isWinner={isWinner}
      isLooser={isLooser}
      rank={rank}
      fullName={fullName}
    />
    <View style={rightContentStyle}>
      <View style={dataCellStyle}>
        <Text style={[textStyle, centerTextStyle]}>{played}</Text>
      </View>
      <View style={dataCellStyle}>
        <Text style={[textStyle, centerTextStyle]}>{won}</Text>
      </View>
      <View style={dataCellStyle}>
        <Text style={[textStyle, centerTextStyle]}>{lost}</Text>
      </View>
      <View style={dataCellStyle}>
        <Text style={[textStyle, centerTextStyle]}>{percentWon}</Text>
      </View>
      <View style={dataCellStyle}>
        <Text style={[textStyle, centerTextStyle]}>{percentLost}</Text>
      </View>
      <View style={dataCellStyle}>
        <Text style={[textStyle, centerTextStyle]}>{money}</Text>
      </View>
    </View>
  </NativeView>
);
