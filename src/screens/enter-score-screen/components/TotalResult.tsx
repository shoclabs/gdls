import React from 'react';
import { Input, Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const totalResultStyle = css`
  height: 32px;
  flex-direction: row;
  margin-top: 25px;
  justify-content: center;
`;

const resultTextStyle = css`
  font-size: 20px;
  font-family: open-sans-extra-bold;
  color: ${colors.darkBlue};
`;

const inputStyle = css`
  width: 32px;
  height: 32px;
  border: solid 1px ${colors.grey};
  font-family: open-sans-bold;
  font-size: 16px;
  color: ${colors.darkBlue};
  text-align: center;
  max-width: 32px;
  margin-left: 10px;
`;

export const TotalResult = ({ result }) => {
  return (
    <View style={totalResultStyle}>
      <Text style={resultTextStyle}>TOTAL POINTS:</Text>
      <Input style={inputStyle} disabled value={result.toString() || '0'} />
    </View>
  );
};
