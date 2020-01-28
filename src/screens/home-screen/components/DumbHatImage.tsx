import React from 'react';
import { Image, View } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { css } from 'css-rn';

import { UploadDefaultDumbHatButton } from './UploadDefaultDumbHatButton';

const dumbHatPlaceholder = require('../assets/dumb-hat-placeholder-2.png');

const imageStyle = css`
  height: 214px;
  width: 100%;
`;

const DUMB_HAT_USER_QUERY = gql`
  query dumbHatUser($id: EntityId!) {
    loserUser: user(id: $id) {
      dumbHatPicture {
        id
        contentBase64
      }
    }
    defaultUser: user(id: 1) {
      dumbHatPicture {
        id
        contentBase64
      }
    }
  }
`;

export const DumbHatImage = ({ loserId }) => {
  const { data } = useQuery(DUMB_HAT_USER_QUERY, { variables: { id: loserId }, fetchPolicy: 'network-only' });
  const imageBase64Url = get(data, 'loserUser.dumbHatPicture.contentBase64');
  const imageBase64UrlDefault = get(data, 'defaultUser.dumbHatPicture.contentBase64');
  const uri = imageBase64UrlDefault ? `data:image/png;base64,${imageBase64UrlDefault}` : imageBase64Url;
  return (
    <View>
      {(imageBase64Url || imageBase64UrlDefault) ?
        <Image style={imageStyle} source={{ uri }} resizeMode="cover" /> :
        <Image style={imageStyle} source={dumbHatPlaceholder} resizeMode="cover" />}
      <UploadDefaultDumbHatButton />
    </View>
  );
};
