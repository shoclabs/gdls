import React from 'react';
import { css } from 'css-rn';
import { View } from 'native-base';

import { Loader } from '../../components/Loader';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  align-items: center;
  margin: 30px 0;
`;

export const BoardLoader = () => (
  <View style={containerStyle}>
    <Loader color={colors.green} />
  </View>
);
