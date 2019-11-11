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
  color: ${colors.darkBlue}
`;

const markedTextStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  color: ${colors.green}
`;

export const CreateHIOHeaderSection = () => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>ENTER THE DETAILS OF</Text>
      <Text style={textStyle}>YOUR <Text style={markedTextStyle}>HOLE-IN-ONE</Text>:</Text>
    </View>
  );
};
