import React from 'react';
import { View } from 'react-native';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';

const separatorContainerStyle = css`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

const separatorStyle = css`
  background-color: ${colors.green};
  height: 4px;
  width: 24px;
`;

export const Separator = () => {
  return (
    <View style={separatorContainerStyle}>
      <View style={separatorStyle} />
    </View>
  );
};
