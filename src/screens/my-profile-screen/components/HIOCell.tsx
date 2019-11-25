import React from 'react';
import { css } from 'css-rn';
import { View, Text } from 'native-base';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: -20px;
`;

const valueStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 50px;
  color: ${colors.blue};
  text-align: center;
`;

const labelStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 20px;
  color: ${colors.blue};
  text-align: center;
  margin-top: -10px;
`;

const detailStyle = css`
  text-align: center;
  font-family: open-sans-regular;
  color: ${colors.blue};
  font-size: 12px;
  margin-top: -5px;
`;

interface IHIOCell {
  value: number;
  label: string;
}

export const HIOCell = (props: IHIOCell) => {
  const { value, label } = props;
  return (
    <View style={containerStyle}>
      <View>
        <Text style={valueStyle}>{value}</Text>
        <Text style={labelStyle}>{label}</Text>
      </View>
    </View>
  );
};
