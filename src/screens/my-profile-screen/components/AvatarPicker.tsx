import React, { useState } from 'react';
import { AsyncStorage, Image, Platform } from 'react-native';
import { Button } from 'native-base';
import { get } from 'lodash';
import { css } from 'css-rn';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { gql } from 'apollo-boost';
import { getApolloContext, useMutation } from '@apollo/react-hooks';

import { PickSelectImageOptionDialog } from './PickSelectImageOptionDialog';

const avatarPlaceholderIcon = require('../../components/icons/avatar-placeholder5x.png');

const avatarStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const buttonStyle = css`
  padding: 0;
  height: 100px;
  margin-top: 40px;
`;

const UPDATE_AVATAR_MUTATION = gql`
  mutation UPDATE_AVATAR($id: EntityId!, $contentBase64: String!) {
    updateUser(input: { id: $id, avatar: { contentBase64: $contentBase64 } }) {
      id
      email
      avatar {
        id
      }
    }
  }
`;

export const AvatarPicker = ({ avatar }) => {
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [showOptionsPicker, setShowOptionsPicker] = useState(false);
  const [updateAvatarMutation] = useMutation(UPDATE_AVATAR_MUTATION);
  const { client } = React.useContext(getApolloContext());
  const changeAvatarImage = async (result) => {
    setSelectedImage(get(result, 'base64'));
    const userId = await AsyncStorage.getItem('userId');
    const variables = { id: userId, contentBase64: get(result, 'base64') };
    const mutationResult = await updateAvatarMutation({ variables });
    if (get(mutationResult, 'data.updateUser.avatar.id')) {
      alert('Your avatar image is successfully updated.');
      await client.resetStore();
    }
  };
  const handleLaunchCameraRoll = async () => {
    if (Platform.OS === 'ios') {
      const { status: cameraRollPermissionStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (cameraRollPermissionStatus !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }
    setShowOptionsPicker(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0,
    });

    if (result.cancelled) {
      return;
    }

    await changeAvatarImage(result);
  };

  const handleLaunchCamera = async () => {
    const { status: cameraRollPermissionStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (cameraRollPermissionStatus !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    const { status: cameraPermissionStatus } = await Permissions.askAsync(Permissions.CAMERA);
    if (cameraPermissionStatus !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    setShowOptionsPicker(false);
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0,
    });

    if (result.cancelled) {
      return;
    }
    await changeAvatarImage(result);
  };

  const avatarSource = selectedImage || get(avatar, 'contentBase64');
  return (
    <>
      <Button transparent onPress={() => setShowOptionsPicker(true)} style={buttonStyle}>
        <Image
          style={avatarStyle}
          source={avatarSource ? { uri: `data:image/png;base64,${avatarSource}` } : avatarPlaceholderIcon}
        />
      </Button>
      <PickSelectImageOptionDialog
        onClose={() => setShowOptionsPicker(false)}
        visible={showOptionsPicker}
        onLaunchCamera={handleLaunchCamera}
        onLaunchCameraRoll={handleLaunchCameraRoll}
      />
    </>
  );
};
