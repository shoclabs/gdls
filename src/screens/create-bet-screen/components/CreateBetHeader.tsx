import React from 'react';
import { View, Text } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  margin-top: 40px;
`;

const textStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  text-align: center;
  color: ${colors.darkBlue};
`;

export const CreateBetHeader = () => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>ENTER NEW BET:</Text>
    </View>
  );
};
