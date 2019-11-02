import React from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'native-base';
import { css } from 'css-rn';

import { colors } from '../../theme/colors';
import { UserStatistics } from './UserStatistics';

const containerStyle = css`
  background-color: white;
  align-items: center;
`;

const avatarStyle = css`
  margin-top: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: black;
`;

const firstNameStyle = css`
  font-family: open-sans-regular;
  font-size: 24px;
  text-align: center;
  margin-top: 35px;
  color: ${colors.darkBlue};
`;

const lastNameStyle = css`
  font-family: open-sans-extra-bold;
  font-size: 24px;
  color: ${colors.darkBlue};
`;

const locationStyle = css`
  font-family: open-sans-regular;
  font-size: 10px;
  color: ${colors.darkBlue};
  margin-top: 3px;
`;

const descriptionStyle = css`
  font-family: open-sans-regular;
  font-size: 14px;
  color: ${colors.darkBlue};
  text-align: center;
  margin-top: 33px;
`;

export const UserModal = ({ isVisible, onClose, userStatistics }) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['left', 'right']}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
    >
      <View style={containerStyle}>
        <View style={avatarStyle} />
        <Text style={firstNameStyle}>
          {userStatistics.firstName} <Text style={lastNameStyle}>{userStatistics.lastName}</Text>
        </Text>
        <Text style={locationStyle}>{userStatistics.location || 'Location not provided'}</Text>
        <Text style={descriptionStyle}>
          {userStatistics.description || 'Description not provided'}
        </Text>
        <UserStatistics {...userStatistics} />
      </View>
    </Modal>
  );
};
