import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border-color: ${colors.blue};
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

const textStyle = css`
  font-family: open-sans-condensed-bold;
  font-size: 12px;
  color: ${colors.darkBlue};
`;

export const Badge = ({ rank }) => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{rank}</Text>
    </View>
  );
};
