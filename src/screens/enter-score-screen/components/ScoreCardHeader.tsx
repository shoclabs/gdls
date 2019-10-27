import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  flex-direction: row;
  margin-top: 18px;
`;

const cellStyle = css`
  flex: 1;
  align-items: center;
  height: 27px;
`;

const textStyle = css`
  font-size: 12px;
  font-family: open-sans-extra-bold;
  color: ${colors.darkBlue};
`;

export const ScoreCardHeader = () => (
  <View style={containerStyle}>
    <View style={cellStyle} />
    <View style={cellStyle}>
      <Text style={textStyle}>Strokes</Text>
    </View>
    <View style={cellStyle}>
      <Text style={textStyle}>Points</Text>
    </View>
    <View style={cellStyle} />
    <View style={cellStyle}>
      <Text style={textStyle}>Strokes</Text>
    </View>
    <View style={cellStyle}>
      <Text style={textStyle}>Points</Text>
    </View>
  </View>
);
