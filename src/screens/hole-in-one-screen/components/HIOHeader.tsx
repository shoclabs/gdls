import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  background-color: ${colors.blue};
`;

const textStyle = css`
  color: white;
  font-family: open-sans-regular;
  font-size: 18px;
`;

export const HIOHeader = () => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>HOLE-IN-ONE</Text>
    </View>
  );
};
