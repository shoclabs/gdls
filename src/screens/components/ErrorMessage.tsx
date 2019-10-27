import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { colors } from '../../theme/colors';

const containerStyle = css`
  margin: 20px 30px 0 20px;
`;

const textStyle = css`
  font-family: open-sans-regular;
  font-size: 17px;
  color: ${colors.red};
  text-align: center;
`;

export const ErrorMessage = ({ text }) => (
  <View style={containerStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>
);
