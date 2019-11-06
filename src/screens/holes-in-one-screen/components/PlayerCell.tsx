import React from 'react';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const containerStyle = css`
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
`;

const avatarStyle = css`
  width: 32px;
  height: 32px;
  background-color: black;
  border-radius: 16px;
`;

const textStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
  margin-left: 16px;
`;

export const PlayerCell = ({ firstName, lastName }) => {
  return (
    <View style={containerStyle}>
      <View style={avatarStyle} />
      <Text style={textStyle}>{`${firstName} ${lastName}`}</Text>
    </View>
  );
};
