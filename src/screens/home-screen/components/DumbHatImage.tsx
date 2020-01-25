import React from 'react';
import { Image } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { css } from 'css-rn';

const dumbHatPlaceholder = require('../assets/dumb-hat-placeholder-2.png');

const imageStyle = css`
  height: 214px;
  width: 100%;
`;

const DUMB_HAT_USER_QUERY = gql`
  query dumbHatUser($id: EntityId!) {
    user(id: $id) {
      dumbHatPicture {
        id
        contentBase64
      }
    }
  }
`;

export const DumbHatImage = ({ loserId }) => {
  const { data } = useQuery(DUMB_HAT_USER_QUERY, { variables: { id: loserId } });
  const imageBase64Url = get(data, 'user.dumbHatPicture.contentBase64');
  return (
    imageBase64Url ?
      <Image style={imageStyle} source={{ uri: imageBase64Url }} resizeMode="cover" /> :
      <Image style={imageStyle} source={dumbHatPlaceholder} resizeMode="cover" />);
};
