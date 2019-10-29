import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { ImageBackground } from 'react-native';

import { colors } from '../../../theme/colors';

const rankIcon = require('../assets/rank.png');
const crownIcon = require('../assets/crown.png');
const dumbhatIcon = require('../assets/dumbhat.png');

const containerStyle = isGrey => css`
  height: 46px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${isGrey ? colors.lightGrey : 'white'};
`;

const leftContentStyle = css`
  flex-direction: row;
  width: 232px;
  align-items: center;
`;

const rightContentStyle = css`
  flex-direction: row;
  width: 143px;
`;

const textStyle = css`
  font-family: open-sans-condensed-light;
  font-size: 13px;
  color: ${colors.darkBlue};
  padding-right: 10px;
`;

const rankStyle = css`
  width: 62px;
`;

const centerTextStyle = css`
  text-align: center;
`;

const playerStyle = css`
  width: 138px;
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
  justify-content: space-between;
`;

const playedStyle = css`
  width: 70px;
`;

const wonStyle = css`
  width: 70px;
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

const crownStyle = css`
  width: 16.2px;
  height: 12.2px;
`;

const dumbhatStyle = css`
  width: 16px;
  height: 12px;
`;

interface ITableRow {
  rank: number;
  played: number;
  won: number;
  fullName: string;
  isWinner?: boolean;
  isLooser?: boolean;
}

export const TableRow = ({ rank, played, won, fullName, isWinner, isLooser }: ITableRow) => (
  <View style={containerStyle(rank % 2 === 1)}>
    <View style={leftContentStyle}>
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
    <View style={rightContentStyle}>
      <View style={playedStyle}>
        <Text style={[textStyle, centerTextStyle]}>{played}</Text>
      </View>
      <View style={wonStyle}>
        <Text style={[textStyle, centerTextStyle]}>{won}</Text>
      </View>
    </View>
  </View>
);
