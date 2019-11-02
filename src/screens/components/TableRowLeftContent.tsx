import React, { useState } from 'react';
import { Button, Text, View } from 'native-base';
import { Image } from 'react-native';
import { css } from 'css-rn';

import { Rank } from './Rank';
import { UserModal } from './UserModal';

import { colors } from '../../theme/colors';

const crownIcon = require('./icons/crown.png');
const dumbhatIcon = require('./icons/dumbhat.png');

const containerStyle = removeRank => css`
  flex-direction: row;
  width: ${removeRank ? 170 : 232}px;
  align-items: center;
  ${removeRank ? 'margin-left: 20px;' : ''}
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

interface ITableRowLeftContent {
  isWinner: boolean;
  isLooser: boolean;
  rank: number;
  fullName: string;
  removeRank?: boolean;
  userStatistics?: any;
}

export const TableRowLeftContent = ({ isWinner, isLooser, rank, fullName, removeRank, userStatistics }: ITableRowLeftContent) => {
  const [showUserModal, setShowUserModal] = useState(false);
  return (
    <View style={containerStyle(removeRank)}>
      {!removeRank && <Rank rank={rank} />}
      <View style={avatarContainerStyle}>
        <Button transparent onPress={() => setShowUserModal(true)}>
          <View style={avatarPlaceholderStyle} />
        </Button>
      </View>
      <View style={playerStyle}>
        <Button transparent onPress={() => setShowUserModal(true)}>
          <Text style={textStyle}>{fullName}</Text>
        </Button>
        {isWinner && <Image style={crownStyle} source={crownIcon} />}
        {isLooser && <Image style={dumbhatStyle} source={dumbhatIcon} />}
      </View>
      {userStatistics &&
        <UserModal isVisible={showUserModal} onClose={() => setShowUserModal(false)} userStatistics={userStatistics} />}
    </View>
  );
};
