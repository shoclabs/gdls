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

const textContainerStyle = css`
  margin: 22px 0 22px 30px;
`;

export const HIOHeader = ({ date, description }) => {
  return (
    <View style={containerStyle}>
      <View style={textContainerStyle}>
        <Text style={textStyle}>HOLE-IN-ONE</Text>
        <Text style={textStyle}>MADE {date}</Text>
        <Text style={textStyle}>{description}</Text>
      </View>
    </View>
  );
};
