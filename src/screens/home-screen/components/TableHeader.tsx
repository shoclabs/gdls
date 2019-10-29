import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

const leftHeaderStyle = css`
  flex-direction: row;
  width: 232px;
`;

const rightHeaderStyle = css`
  flex-direction: row;
  width: 143px;
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

const playedStyle = css`
  width: 70px;
`;

const wonStyle = css`
  width: 70px;
`;

export const TableHeader = () => (
  <View style={containerStyle}>
    <View style={leftHeaderStyle}>
      <View style={rankStyle}>
        <Text style={[textStyle, centerTextStyle]}>Rank</Text>
      </View>
      <View style={playerStyle}>
        <Text style={textStyle}>Player</Text>
      </View>
    </View>
    <View style={rightHeaderStyle}>
      <View style={playedStyle}>
        <Text style={[textStyle, centerTextStyle]}>Played</Text>
      </View>
      <View style={wonStyle}>
        <Text style={[textStyle, centerTextStyle]}>Won</Text>
      </View>
    </View>
  </View>
);
