import React from 'react';
import { View } from 'react-native';
import { css } from 'css-rn';

const containerStyle = height => css`
  height: ${height}px;
`;

export const Divider = ({ height }) => {
  return <View style={containerStyle(height)} />;
};
