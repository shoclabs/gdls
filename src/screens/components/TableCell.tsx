import React from 'react';
import { css } from 'css-rn';
import { Text, View } from 'native-base';

import { colors } from '../../theme/colors';

const centerTextStyle = css`
  text-align: center;
`;

const dataCellStyle = css`
  width: 70px;
`;

const textStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
  padding-right: 10px;
`;

export const TableCell = ({ value }) => (
  <View style={dataCellStyle}>
    <Text style={[textStyle, centerTextStyle]}>{value}</Text>
  </View>
);
