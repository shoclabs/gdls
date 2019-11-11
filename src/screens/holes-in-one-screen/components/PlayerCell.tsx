import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../../theme/colors';

const avatarPlaceholderIcon = require('../../components/icons/avatar-placeholder5x.png');

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

export const PlayerCell = ({ firstName, lastName, contentBase64 }) => {
  return (
    <View style={containerStyle}>
      <Image
        style={avatarStyle}
        source={contentBase64 ? { uri: `data:image/png;base64,${contentBase64}` } : avatarPlaceholderIcon}
      />
      <Text style={textStyle}>{`${firstName} ${lastName}`}</Text>
    </View>
  );
};
