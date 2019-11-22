import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';
import { IBet, SideBetRow } from './SideBetRow';

const containerStyle = css`
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

const textStyle = css`
  font-size: 12px;
  font-family: open-sans-extra-bold;
  color: ${colors.darkBlue};
  text-align: center;
`;

const dateStyle = css`
  width: 80px;
`;

const courseStyle = css`
  width: 140px;
`;

const amountStyle = css`
  width: 120px;
`;

interface ISideBetsDetailsTable {
  bets: Array<IBet>;
}

export const SideBetsDetailsTable = ({ bets }: ISideBetsDetailsTable) => {
  return (
    <>
      <View style={containerStyle}>
        <View style={dateStyle}><Text style={textStyle}>DATE</Text></View>
        <View style={courseStyle}><Text style={textStyle}>COURSE</Text></View>
        <View style={amountStyle}><Text style={textStyle}>AMOUNT</Text></View>
      </View>
      {bets.reverse().map((bet, index) => <SideBetRow bet={bet} index={index} key={bet.id} />)}
    </>
  );
};
