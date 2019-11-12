import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'native-base';
import { css } from 'css-rn';
import { get } from 'lodash';

import { countryIconResolver } from '../../resolvers/country-icon-resolver';

const profileImagePlaceholder = require('../../icons/avatar-placeholder5x.png');

const containerStyle = css`
  padding: 0 25px;
  flex-direction: row;
`;

const imageContainerStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

const descriptionContainerStyle = css`
  color: white;
  margin-left: 10px;
`;

const nameStyle = css`
  color: white;
  font-family: open-sans-regular;
`;

const surnameStyle = css`
  font-family: open-sans-extra-bold;
  color: white;
`;

const locationStyle = css`
  color: white;
  font-family: open-sans-condensed-bold;
`;

const flagStyle = css`
  width: 25px;
  height: 25px;
  margin-top: 5px;
`;

export const ProfileSection = ({ user }) => {
  const avatarBase64 = get(user, 'avatar.contentBase64');
  const firstName = get(user, 'firstName') ?
    get(user, 'firstName').toUpperCase() :
    get(user, 'firstName');
  const lastName = get(user, 'lastName') ?
    get(user, 'lastName').toUpperCase() :
    get(user, 'lastName');
  return (
    <View style={containerStyle}>
      <Image
        style={imageContainerStyle}
        source={avatarBase64 ? { uri: `data:image/png;base64,${avatarBase64}` } : profileImagePlaceholder}
      />
      <View style={descriptionContainerStyle}>
        <Text style={nameStyle}>
          {firstName} <Text style={surnameStyle}>{lastName}</Text>
        </Text>
        {get(user, 'location') && countryIconResolver[user.location.toLowerCase()] ?
          <Image source={countryIconResolver[user.location.toLowerCase()]} style={flagStyle} /> :
          <Text style={locationStyle}>
            {get(user, 'location') || 'Location not provided'}
          </Text>}
      </View>
    </View>
)};
