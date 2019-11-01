import React from 'react';
import { View } from 'native-base';
import { css } from 'css-rn';

import { TableRowLeftContent } from '../../components/TableRowLeftContent';

import { colors } from '../../../theme/colors';
import { TableCell } from '../../components/TableCell';

const containerStyle = isGrey => css`
  height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${isGrey ? colors.lightGrey : 'white'};
`;

const rightContentStyle = css`
  flex-direction: row;
`;

export const TableRow = ({ rank, isWinner, isLooser, fullName, score }) => {
  return (
    <View style={containerStyle(rank % 2 === 1)}>
      <TableRowLeftContent
        isWinner={isWinner}
        isLooser={isLooser}
        rank={rank}
        fullName={fullName}
      />
      <View style={rightContentStyle}>
        <TableCell value={score} />
      </View>
    </View>
  );
};
