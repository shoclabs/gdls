import React from 'react';
import { Image, View } from 'react-native';
import { css } from 'css-rn';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { UploadDefaultDumbHatButton } from './UploadDefaultDumbHatButton';

const dumbHatPlaceholder = require('../assets/dumb-hat-placeholder-2.png');

const imageStyle = css`
  height: 214px;
  width: 100%;
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

export const DefaultDumbHatImage = () => {
  const { data } = useQuery(DUMB_HAT_USER_QUERY, { fetchPolicy: 'network-only' });
  const imageBase64Url = get(data, 'user.dumbHatPicture.contentBase64');
  return (
    <View>
      {imageBase64Url ?
        <Image style={imageStyle} source={{ uri: `data:image/png;base64,${imageBase64Url}` }} resizeMode="cover" /> :
        <Image style={imageStyle} source={dumbHatPlaceholder} resizeMode="cover" />}
      <UploadDefaultDumbHatButton />
    </View>
  );
};
