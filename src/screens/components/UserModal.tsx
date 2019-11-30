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

interface IUserModal {
  isVisible: boolean;
  onClose(): void;
  userStatistics: any;
  avatarBase64?: string;
  type?: 'full' | 'partial';
  hideHolesInOne?: boolean;
}

export const UserModal = ({ isVisible, onClose, userStatistics, avatarBase64, type, hideHolesInOne = false }: IUserModal) => {
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
          avatarBase64={avatarBase64}
        />
        <UserStatistics {...userStatistics} type={type || 'full'} hideHolesInOne />
      </View>
    </Modal>
  );
};
