import React, { useState } from 'react';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
import { css } from 'css-rn';
import { gql } from 'apollo-boost';
import { getApolloContext, useMutation, useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { Icon } from 'native-base';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { PickSelectImageOptionDialog } from '../../my-profile-screen/components/PickSelectImageOptionDialog';

import { authStore } from '../../../stores/auth-store';

const dumbHatPlaceholder = require('../assets/dumb-hat-placeholder-2.png');

const imageStyle = css`
  height: 214px;
  width: 100%;
`;

const addPhotoStyle = css`
  color: white;
  font-size: 25px;
`;

const addPhotoButtonStyle = css`
  background-color: rgba(52, 52, 52, 0.8);
  padding: 8px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 46px;
  height: 46px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const DUMB_HAT_USER_QUERY = gql`
  query dumbHatUser {
    user(id: 1) {
      dumbHatPicture {
        id
        contentBase64
      }
    }
  }
`;

const UPDATE_AVATAR_MUTATION = gql`
  mutation UPDATE_AVATAR($id: EntityId!, $contentBase64: String!) {
    updateUser(input: { id: $id, dumbHatPicture: { contentBase64: $contentBase64 } }) {
      id
      email
        dumbHatPicture {
        id
      }
    }
  }
`;

export const DefaultDumbHatImage = () => {
  const { data } = useQuery(DUMB_HAT_USER_QUERY);
  const [showOptionsPicker, setShowOptionsPicker] = useState(false);
  const [updateAvatarMutation] = useMutation(UPDATE_AVATAR_MUTATION);
  const imageBase64Url = get(data, 'user.dumbHatPicture.contentBase64');
  const { client } = React.useContext(getApolloContext());
  const changeAvatarImage = async (result) => {
    const { userId } = authStore;
    const variables = { id: userId, contentBase64: get(result, 'base64') };
    const mutationResult = await updateAvatarMutation({ variables });
    if (get(mutationResult, 'data.updateUser.dumbHatPicture.id')) {
      alert('Your avatar image is successfully updated.');
      await client.resetStore();
    }
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
      aspect: [1, 2.3],
      base64: true,
      quality: Platform.OS === 'android' ? 0.5 : 0.5,
    });

    if (result.cancelled) {
      return;
    }
    await changeAvatarImage(result);
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
      aspect: [1, 2.3],
      base64: true,
      quality: Platform.OS === 'android' ? 0.5 : 0.5,
    });

    if (result.cancelled) {
      return;
    }

    await changeAvatarImage(result);
  };

return (
  <View>
    {imageBase64Url ?
      <Image style={imageStyle} source={{ uri: `data:image/png;base64,${imageBase64Url}` }} resizeMode="cover" /> :
      <Image style={imageStyle} source={dumbHatPlaceholder} resizeMode="cover" />}
    <TouchableOpacity onPress={() => setShowOptionsPicker(true)} style={addPhotoButtonStyle}>
      <Icon name="add-a-photo" type="MaterialIcons" style={addPhotoStyle} />
    </TouchableOpacity>
    <PickSelectImageOptionDialog
      onClose={() => setShowOptionsPicker(false)}
      visible={showOptionsPicker}
      onLaunchCamera={handleLaunchCamera}
      onLaunchCameraRoll={handleLaunchCameraRoll}
    />
  </View>);
};
