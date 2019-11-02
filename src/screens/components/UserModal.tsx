import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'native-base';
import { css } from 'css-rn';

import { UserStatistics } from './UserStatistics';
import { UserInfo } from './UserInfo';

const containerStyle = css`
  background-color: white;
  align-items: center;
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
        <UserInfo
          firstName={userStatistics.firstName}
          lastName={userStatistics.lastName}
          description={userStatistics.description}
          location={userStatistics.location}
        />
        <UserStatistics {...userStatistics} />
      </View>
    </Modal>
  );
};
