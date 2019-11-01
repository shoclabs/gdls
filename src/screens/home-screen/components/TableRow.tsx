import React from 'react';
import { View as NativeView } from 'react-native';
import { View } from 'native-base';
import { css } from 'css-rn';

import { TableRowLeftContent } from '../../components/TableRowLeftContent';

import { colors } from '../../../theme/colors';
import { TableCell } from '../../components/TableCell';

const containerStyle = isGrey => css`
  height: 46px;
  flex-direction: row;
  align-items: center;
  background-color: ${isGrey ? colors.lightGrey : 'white'};
`;

const rightContentStyle = css`
  flex-direction: row;
`;

interface ITableRow {
  rank: number;
  played: number;
  won: number;
  lost: number;
  percentWon: number;
  percentLost: number;
  money: number;
  hcp: number;
  fullName: string;
  isWinner?: boolean;
  isLooser?: boolean;
}

export const TableRow = ({ rank, played, won, lost, fullName, isWinner, isLooser, percentWon, percentLost, money, hcp }: ITableRow) => (
  <NativeView style={containerStyle(rank % 2 === 1)}>
    <TableRowLeftContent
      isWinner={isWinner}
      isLooser={isLooser}
      rank={rank}
      fullName={fullName}
      removeRank
    />
    <View style={rightContentStyle}>
      <TableCell value={played} />
      <TableCell value={won} />
      <TableCell value={lost} />
      <TableCell value={percentWon} />
      <TableCell value={percentLost} />
      <TableCell value={hcp} />
      <TableCell value={money} />
    </View>
  </NativeView>
);
