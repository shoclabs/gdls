import React from 'react';
import { Text, View } from 'native-base';
import { ImageBackground, Image } from 'react-native';
import { css } from 'css-rn';
import { colors } from '../../theme/colors';

const rankIcon = require('./icons/rank.png');
const crownIcon = require('./icons/crown.png');
const dumbhatIcon = require('./icons/dumbhat.png');

const containerStyle = css`
  flex-direction: row;
  width: 232px;
  align-items: center;
`;

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

const avatarContainerStyle = css`
  width: 32px;
`;

const avatarPlaceholderStyle = css`
  background-color: black;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const playerStyle = css`
  width: 138px;
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
  justify-content: space-between;
`;

const textStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
  padding-right: 10px;
`;

const crownStyle = css`
  width: 16.2px;
  height: 12.2px;
`;

const dumbhatStyle = css`
  width: 16px;
  height: 12px;
`;

export const TableRowLeftContent = ({ isWinner, isLooser, rank, fullName }) => (
  <View style={containerStyle}>
    <View style={rankStyle}>
      <ImageBackground source={rankIcon} style={rankIconStyle}>
        <Text style={rankTextStyle}>{rank}</Text>
      </ImageBackground>
    </View>
    <View style={avatarContainerStyle}>
      <View style={avatarPlaceholderStyle} />
    </View>
    <View style={playerStyle}>
      <Text style={textStyle}>{fullName}</Text>
      {isWinner && <Image style={crownStyle} source={crownIcon} />}
      {isLooser && <Image style={dumbhatStyle} source={dumbhatIcon} />}
    </View>
  </View>
);
