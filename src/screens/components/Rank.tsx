import React from 'react';
import { Text, View } from 'native-base';
import { ImageBackground } from 'react-native';
import { css } from 'css-rn';

const rankIcon = require('./icons/rank.png');

const rankStyle = css`
  width: 62px;
`;

const rankIconStyle = css`
  width: 24px;
  height: 27.5px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

const rankTextStyle = css`
  font-family: open-sans-condensed-bold;
  font-size: 12px;
  color: white;
`;

export const Rank = ({ rank }) => (
  <View style={rankStyle}>
    <ImageBackground source={rankIcon} style={rankIconStyle}>
      <Text style={rankTextStyle}>{rank}</Text>
    </ImageBackground>
  </View>
);
