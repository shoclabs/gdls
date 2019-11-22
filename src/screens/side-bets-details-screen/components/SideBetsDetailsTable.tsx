import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';
import { ScrollView } from 'react-native';

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
  width: 110px;
`;

const amountStyle = css`
  width: 60px;
`;

interface ISideBetsDetailsTable {
  bets: Array<IBet>;
}

export const SideBetsDetailsTable = ({ bets }: ISideBetsDetailsTable) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <View style={containerStyle}>
          <View style={dateStyle}><Text style={textStyle}>DATE</Text></View>
          <View style={courseStyle}><Text style={textStyle}>COURSE</Text></View>
          <View style={amountStyle}><Text style={textStyle}>$</Text></View>
          <View style={amountStyle}><Text style={textStyle}>C. ADV</Text></View>
          <View style={amountStyle}><Text style={textStyle}>N. ADV</Text></View>
        </View>
        {bets.reverse().map((bet, index) => <SideBetRow bet={bet} index={index} key={bet.id} />)}
      </View>
    </ScrollView>
  );
};
